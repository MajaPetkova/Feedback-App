const {Schema, model, Types: { ObjectId }} = require("mongoose");

const MessageSchema = new Schema({
conversationId:{ type: String, required:true}, 
userId:{type:String, required:true},
desc:{type:String, required:true},
},  { timestamps: true });

const Message = model("Message", MessageSchema);
module.exports= Message;