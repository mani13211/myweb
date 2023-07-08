import { redirect } from "next/dist/server/api-utils"
import connectDb from "../../../middleware/middleware"
import contact from "../../../models.js/contact"

var jwt = require('jsonwebtoken');

const handler=async(req,res)=>{
    if(req.method == "POST"){
       var data=req.body
        if(data.name=="admin" ){
            if(data.password=="admin"){
                var token = jwt.sign({ "name": 'admin','password':"admin" }, "fusionweb");
                res.status(200).json({ message: 'Welcome back' ,success:true,token:token})
            }else{
                res.status(200).json({ message: 'Wrong password',success:false })
            }
        }
        else{
            res.status(200).json({ message: 'Invalid credential',success:false })
        }
      
        
    }else{
        res.status(200).json({ name: 'method not allowed' })
    }
   

}
export default connectDb(handler)