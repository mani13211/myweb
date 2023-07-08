
const mongoose = require('mongoose');
// const cors = require('cors');

const connectDb = handler =>async(req,res)=>{

//   await cors()(req, res);

  if(mongoose.connections[0].readyState){
    return handler(req,res)
  }
  // await mongoose.connect(process.env.MONGO_URI, {
  //   dbName: `fusionwebz`,
  //   useNewUrlParser: "true",
  //   useUnifiedTopology: "true"
  
  // })
  await mongoose.connect("mongodb+srv://fusionwebz07:9815897261@cluster0.vdydlms.mongodb.net/?retryWrites=true&w=majority", {
    dbName: `fusionwebz`,
    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  
  })
  return handler(req,res)
}
export default connectDb