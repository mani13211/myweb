const mongoose = require (`mongoose`)
const ContactSchema = new mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    message:{type:String,required:true},
    type:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
  },{timeStamps:true}

  );
  export default mongoose.models.Contact || mongoose.model("Contact",ContactSchema)