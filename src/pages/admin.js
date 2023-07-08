import React from 'react'
import { useEffect,useState } from 'react'
import connectDb from '../../middleware/middleware'
import mongoose from 'mongoose'
import Head from 'next/head'
import contact from '../../models.js/contact'
import { useRouter } from 'next/router'
import DataTable from 'react-data-table-component';
function Admin({ data }) {
  
  const router = useRouter()
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login")
    } 
    setLoader(false);
  }, [])

 

    const columns = [
        {
            name: 'Name',
            selector: row => (row.fname+" "+row.lname),
            
        },
        {
            name: 'Phone',
            selector: row => row.phone,
        },
        {
          name: 'Email',
          selector: row => row.email,
        },
        {
          name: 'Message',
          selector: row => row.message,
        },
        {
          name: 'Type',
          selector: row => row.type,
         },
        
         {
            name: 'Actions',
            selector: row =>(
               <button
              className={`btn btn-primary btn-sm`}
              onClick={() => { deleteContact(row._id) }}
              id={row._id}
            >
              <i className={`bi bi-trash-fill`}></i>
            </button>
             
            )
           },
    ];

    const paginationComponentOptions = {
      rowsPerPageText: 'Filas por página',
      rangeSeparatorText: 'de',
      selectAllRowsItem: true,
      selectAllRowsItemText: 'Todos',
  };
  

  const deleteContact=async(id)=>{
    console.log("getting",id)
    var data={id:id,name:"mani"}
        
    try {
      const response = await fetch( `https://fusionwebz.com/api/contactDelete`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result.message);
      router.reload()
      
    } catch (error) {
      console.error("Error:", error);
    }

  }
  
  return (
    <div className='admin-page'>
       <Head>
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
      </Head>
      <div className='container card p-0  '>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">People we need to contact</span>
          </div>
        </nav>

        <div className='p-3 d-none'>
          <table id="myTable" className='w-100'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Message</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, key) => {
                return (
                  <tr key={key}>
                    <td>{i.fname} {i.lname}</td>
                    <td>{i.phone}</td>
                    <td>{i.email}</td>
                    <td>{i.message}</td>
                    <td>{i.type}</td>
                    <td ><button className="btn btn-primary btn-sm" onClick={(()=>{deleteContact(i._id)})} id={i._id}><i className="bi bi-trash-fill"></i></button></td>
                  </tr>
                )

              })}


            </tbody>
          </table>
          
        </div>
        <div className='p-3'>
        {loader &&  <h6 className='text-center p-3'>Loading..</h6>}
        {!loader && <DataTable
        pagination
        paginationRowsPerPageOptions={[5,10,15,1000]}
          columns={columns}
          fixedHeader={true}
          data={data}
          />}
          </div>
      

      </div>
    </div>
  )
}


export async function getServerSideProps() {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect("mongodb+srv://fusionwebz07:9815897261@cluster0.vdydlms.mongodb.net/?retryWrites=true&w=majority",{
      dbName: `fusionwebz`,
      useNewUrlParser: "true",
      useUnifiedTopology: "true"
    })
  }
  const data = await contact.find({})

  // Pass data to the page via props
  return { props: { data: JSON.parse(JSON.stringify(data)) } }
}

export default Admin