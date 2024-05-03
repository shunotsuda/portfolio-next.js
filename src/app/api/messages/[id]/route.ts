import { MessageModel } from "@/models/message";
import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (id:string) => {
    try {
        await connectDB();
        const fetchedMessage = await MessageModel.findById(id);
        if (!fetchedMessage) {
            return NextResponse.json(
                { message: "メッセージが存在しません" },
                { status: 404 }
            );
        }
        return NextResponse.json({
            message: "メッセージの取得に成功しました",
            fetchedMessage,
        });
    } catch (error) {
        return NextResponse.json(
            { message: "メッセージの取得に失敗しました" },
            { status: 500 }
        );
    }
};

export const dynamic = "force-dynamic";
