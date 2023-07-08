import connectDb from "../../../middleware/middleware"
import contact from "../../../models.js/contact"
const handler=async(req,res)=>{
    if(req.method == "POST"){
        
        const data= req.body
        try{
              contact.deleteOne({_id:data.id}) .then(result => {
                console.log("post deleted");
                res.status(200).json({ message: 'Deleted' })
              });
             
        }
        catch(error){
            console.log(error)
            res.status(500).json({ message: 'Some technical error' })
            
        }
        
        
        
    }else{
        res.status(200).json({ name: 'method not allowed' })
    }
   

}
export default connectDb(handler)