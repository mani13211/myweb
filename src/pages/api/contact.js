import connectDb from "../../../middleware/middleware"
import contact from "../../../models.js/contact"
const handler=async(req,res)=>{
    if(req.method == "POST"){
        console.log(req.body)
        const data= req.body
        try{
            let p=new contact({
                fname:data.fname,
                lname:data.lname,
                message:data.message,
                type:data.type,
                email:data.email,
                phone:data.phone,
            })
            await p.save()
            res.status(200).json({ message: 'We will get in touch you soon' })
        }
        catch{
            res.status(500).json({ message: 'Some technical error' })
            
        }
        
        
        
    }else{
        res.status(200).json({ name: 'method not allowed' })
    }
   

}
export default connectDb(handler)