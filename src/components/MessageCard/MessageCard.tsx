"use client"
import { MessageDocument } from "@/models/message";
import MessageEditCard from "./MessageEditCard/MessageEditCard";
import { FC } from "react";

interface MessageCardProps {
    message: MessageDocument;
}
const MessageCard: FC<MessageCardProps> = ({ message }) => {
    // const date = new Date(message.updatedAt);
    // const year = date.getFullYear();
    // const month = date.getMonth() + 1;
    // const day = date.getDate();
    // const hour = date.getHours();
    // const minute = date.getMinutes();
    // const formatted = `${year}/${month}/${day} ${hour}:${minute}`;
    const formatter = new Intl.DateTimeFormat('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
    const formatted = formatter.format(new Date(message.updatedAt));
    return (
        <div className="bg-white w-[95%]  px-8 py-4 max-w-[980px] mx-auto my-4 shadow-md shadow-slate-500">
            <div className="border-b  border-green-500">
                <div className="flex justify-between">
                    <h2 className="font-bold text-xl flex-1">
                        - {message.name} -
                    </h2>
                    <MessageEditCard
                        message={message}
                    />
                </div>
                <div className="mt-4">
                    <p className="max-w-[90%] m-auto whitespace-pre-line">{message.message}</p>
                </div>
                <p className=" text-sm p-4 text-right">{formatted}</p>
            </div>
        </div>
    );
};

export default MessageCard;
