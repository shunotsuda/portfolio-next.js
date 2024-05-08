import MessageCard from "@/components/MessageCard/MessageCard";
import MessageCreateCard from "@/components/MessageCard/MessageCreateCard/MessageCreateCard";
import { MessageDocument } from "@/models/message";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const getAllMessages = async (): Promise<MessageDocument[]> => {
    try {
        const response = await fetch(`${process.env.API_URL}/messages`, {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error("メッセージの取得に失敗しました。");
        }

        const data = await response.json();
        return data.messages as MessageDocument[];
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default async function Message() {
    const allMessages = await getAllMessages();
    return (
        <div className="m-4 md:p-10 text-gray-800 h-full overflow-y-auto overflow-x-hidden">
            <div className="flex justify-end mb-4">
                <MessageCreateCard />
            </div>
            <div className=" w-full  bg-white  max-w-[980px] m-auto pb-4">
                <h1
                    className={`${dancingScript.className} text-center text-[3rem] lg:text-[4rem] font-bold py-4`}
                >
                    <span className="border-b-2">~ Message ~</span>
                </h1>
                {allMessages.map((message) => (
                    <MessageCard key={message._id} message={message} />
                ))}
            </div>
        </div>
    );
}
