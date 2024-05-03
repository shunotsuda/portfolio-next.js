"use server";

import { Message, MessageModel } from "@/models/message";
import { connectDB } from "@/utils/database";
import { redirect } from "next/navigation";

export interface FormState {
    error: string;
}

export const createMessage = async (state: FormState, formData: FormData) => {
    const newMessage: Message = {
        name: formData.get("name") as string,
        message: formData.get("message") as string,
        password: formData.get("password") as string,
    };

    try {
        await connectDB();
        await MessageModel.create(newMessage);
    } catch (error) {
        state.error = "メッセージの作成に失敗しました";
        return state;
    }

    return redirect("/message");
};

export const updateMessage = async (
    id: string,
    state: FormState,
    formData: FormData
) => {
    const updateMessage: Message = {
        name: formData.get("name") as string,
        message: formData.get("message") as string,
        password: formData.get("password") as string,
    };

    try {
        await connectDB();
        await MessageModel.updateOne({ _id: id }, updateMessage);
    } catch (error) {
        state.error = "メッセージの更新に失敗しました";
        return state;
    }

   return redirect("/message");
};

export const deleteMessage = async (
    id: string,
    state: FormState,
) => {

    try {
        await connectDB();
        await MessageModel.deleteOne({ _id: id });
    } catch (error) {
        state.error = "メッセージの削除に失敗しました";
        return state;
    }

   return redirect("/message");
};
