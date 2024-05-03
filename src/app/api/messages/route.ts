import { MessageDocument, MessageModel } from "@/models/message";
import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB();
        const allMessages: MessageDocument[] = await MessageModel.find().sort({ createdAt: -1 });;
        return NextResponse.json({
            message: "メッセージ取得に成功しました",
            messages: allMessages,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "メッセージの取得に失敗しました" },
            { status: 500 }
        );
    }
};

export const dynamic = "force-dynamic"