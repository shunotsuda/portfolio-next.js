import CreateMessageButton from "@/components/CreateMessageButton/CreateMessageButton";
import MessageEditCard from "@/components/MessageCard/MessageEditCard/MessageEditCard";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Message = () => {
    
    return (
        <div className="m-4 md:p-10 text-gray-800 h-full overflow-y-auto overflow-x-hidden">
           <div className="flex justify-end mb-4">
                <CreateMessageButton />
           </div>
            <header className=" w-full  bg-white pb-4 max-w-[980px] m-auto">
                <h1
                    className={`${dancingScript.className} text-center text-[3rem] lg:text-[4rem] font-bold`}
                >
                    ~ Message ~
                </h1>
                
            </header>
            <div className="bg-white px-8 py-4 max-w-[980px] m-auto">
                <div className="border-b  border-green-500">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-xl flex-1">
                            - 株式会社△〇　×× -
                        </h2>
                        <MessageEditCard id={`1`}/>
                    </div>
                    <div className="mt-4">
                        <p className="max-w-[90%] m-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est velit saepe cupiditate animi tempora nulla
                            illo magni facilis enim praesentium autem maxime
                            quisquam cum rem quam quia, magnam eum maiores!
                        </p>
                    </div>
                    <p className=" text-sm p-4 text-right">2024/5/5</p>
                </div>
            </div>
            <div className="bg-white px-8 py-4 max-w-[980px] m-auto">
                <div className="border-b  border-green-500">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-xl">-　匿名　-</h2>
                        <MessageEditCard id={`1`} />
                    </div>
                    <div className="mt-4">
                        <p className="max-w-[90%] m-auto">
                            就職活動頑張ってください！
                        </p>
                    </div>
                    <p className=" text-sm p-4 text-right">2024/5/6</p>
                </div>
            </div>
           
        </div>
    );
};

export default Message;
