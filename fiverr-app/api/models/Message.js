import mongoose from "mongoose";
const { Schema, model, Types:{ObjectId} } = mongoose;

const MessageSchema = new Schema({
conversationIdId:{ type: String, required:true}, 
userId:{type:String, required:true},
desc:{type:String, required:true},
});

const Message = model("Message", MessageSchema);
module.exports= Message;