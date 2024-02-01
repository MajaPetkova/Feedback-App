const {Schema, model, Types: { ObjectId }} = require("mongoose");

const ConversationSchema = new Schema({
id:{ type: String, required:true, unique:true},
sellerId:{ type: String, required:true},
buyerId:{ type: String, required:true},
readBySeller:{ type: Boolean, required:true},
readByBuyer:{ type:Boolean, required:true},
lastMessage:{ type: String, required:false},
},  { timestamps: true });

const Conversation = model("Conversation", ConversationSchema);
module.exports= Conversation;