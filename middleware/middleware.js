
const mongoose = require('mongoose');
// const cors = require('cors');

const connectDb = handler =>async(req,res)=>{

//   await cors()(req, res);

  if(mongoose.connections[0].readyState){
    return handler(req,res)
  }
  await mongoose.connect(process.env.MONGO_URI, {
    dbName: `fusionwebz`,
    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  
  })
  return handler(req,res)
}
export default connectDb