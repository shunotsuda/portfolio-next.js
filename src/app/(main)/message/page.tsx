import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { IoIosCreate } from "react-icons/io";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Message = () => {
    return (
        <div className="m-4 md:p-10 text-gray-800 h-full overflow-y-auto overflow-x-hidden">
            <header className=" w-full flex flex-row justify-between items-center bg-white">
                <h1
                    className={`${dancingScript.className} text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold ml-4 md:ml-4`}
                >
                    ~ Message ~
                </h1>
                    <Link
                        href="/message/new"
                        className=" flex items-center gap-1 text-[0.5rem] md:text-sm md:font-semibold border px-2 md:px-4 py-1 md:py-2 mr-4 rounded-full shadow-sm text-white hover:text-opacity-75 bg-gray-800 hover:bg-gray-700"
                    >
                        <IoIosCreate className="md:size-5" />
                        <div className="border-b border-green-500">New Message</div>
                    </Link>
            </header>
                <div className="bg-white p-8">
                    <div className="border-b  border-green-500">
                        message一覧
                    </div>
                </div>
                <div className="bg-white p-8">
                    <div className="border-b  border-green-500">
                        message一覧
                    </div>
                </div>
                <div className="bg-white p-8">
                    <div className="border-b  border-green-500">
                        message一覧
                    </div>
                </div>
                <div className="bg-white p-8">
                    <div className="border-b  border-green-500">
                        message一覧
                    </div>
                </div>
                <div className="bg-white p-8">
                    <div className="border-b  border-green-500">
                        message一覧
                    </div>
                </div>
                <div className="bg-white p-8">
                    <div className="border-b  border-green-500">
                        message一覧
                    </div>
                </div>
        </div>
    );
};

export default Message;
