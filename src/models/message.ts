import mongoose, { Document } from "mongoose";

export interface Message {
    name: string;
    message: string;
    password: string;
}

export interface MessageDocument extends Message, Document {
    createdAt: Date;
    updatedAt: Date;
}

const messageSchema = new mongoose.Schema<MessageDocument>(
    {
        name: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const MessageModel =
    mongoose.models.Message || mongoose.model("Message", messageSchema);
