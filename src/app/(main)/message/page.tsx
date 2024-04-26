import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { IoIosCreate } from "react-icons/io";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Message = () => {
    return (
        <div className="m-4 md:p-10 text-gray-800 h-full overflow-y-auto overflow-x-hidden">
            <header className=" w-full flex flex-col md:flex-row justify-between items-center bg-white">
                <h1
                    className={`${dancingScript.className} text-[2rem] md:text-[4rem] font-bold ml-4`}
                >
                    ~ Message ~
                </h1>
                <Link
                    href="/message/new"
                    className="flex items-center gap-1 font-semibold border px-4 py-2 mr-4 rounded-full shadow-sm text-white hover:text-opacity-75 bg-gray-800 hover:bg-gray-700"
                >
                    <IoIosCreate className="size-5" />
                    <div className="border-b border-green-500">New Message</div>
                </Link>
            </header>
            <div className="bg-white p-8">
                <div className="border-b mb-96 border-green-500">
                    message一覧
                </div>
            </div>
        </div>
    );
};

export default Message;
