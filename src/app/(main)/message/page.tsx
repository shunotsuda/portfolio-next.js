import MessageEditButton from "@/components/MessageCard/MessageEditButton/MessageEditButton";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { IoIosCreate } from "react-icons/io";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Message = () => {
    return (
        <div className="m-4 md:p-10 text-gray-800 h-full overflow-y-auto overflow-x-hidden">
            <header className=" w-full flex flex-col md:flex-row justify-between items-center bg-white pb-4 max-w-[980px] m-auto">
                <h1
                    className={`${dancingScript.className} text-[3rem] lg:text-[4rem] font-bold ml-4 md:ml-4`}
                >
                    ~ Message ~
                </h1>
                <Link
                    href="/message/new"
                    className=" flex items-center gap-1 text-[1rem] md:text-sm md:font-semibold border px-2 md:px-4 py-2 md:py-3 mr-4 rounded-full shadow-sm text-white hover:text-opacity-75 bg-gray-800 hover:bg-gray-700"
                >
                    <IoIosCreate className="md:size-5" />
                    <div className="border-b border-green-500">New Message</div>
                </Link>
            </header>
            <div className="bg-white px-8 py-4 max-w-[980px] m-auto">
                <div className="border-b  border-green-500">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-xl flex-1">
                            - 株式会社△〇　×× -
                        </h2>
                        <MessageEditButton id={`1`} password="sirokuma" />
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
                        <MessageEditButton id={`1`} password="tenten" />
                    </div>
                    <div className="mt-4">
                        <p className="max-w-[90%] m-auto">
                            就職活動頑張ってください！
                        </p>
                    </div>
                    <p className=" text-sm p-4 text-right">2024/5/6</p>
                </div>
            </div>
            <div className="bg-white px-8 py-4 max-w-[980px] m-auto">
                <div className="border-b  border-green-500">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-xl">-　匿名　-</h2>
                        <MessageEditButton id={`1`} password="tenten" />
                    </div>
                    <div className="mt-4">
                        <p className="max-w-[90%] m-auto">
                            就職活動頑張ってください！
                        </p>
                    </div>
                    <p className=" text-sm p-4 text-right">2024/5/6</p>
                </div>
            </div>
            <div className="bg-white px-8 py-4 max-w-[980px] m-auto">
                <div className="border-b  border-green-500">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-xl">-　匿名　-</h2>
                        <MessageEditButton id={`1`} password="tenten" />
                    </div>
                    <div className="mt-4">
                        <p className="max-w-[90%] m-auto">
                            就職活動頑張ってください！
                        </p>
                    </div>
                    <p className=" text-sm p-4 text-right">2024/5/6</p>
                </div>
            </div>
            <div className="bg-white px-8 py-4 max-w-[980px] m-auto">
                <div className="border-b  border-green-500">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-xl">-　匿名　-</h2>
                        <MessageEditButton id={`1`} password="tenten" />
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
