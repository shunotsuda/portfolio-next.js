import Image from "next/image";
import Link from "next/link";

export default function Works() {
    return (
        <>
            <div className=" min-h-screen bg-slate-700 opacity-85 p-4 lg:p-12 pt-4 lg:pt-8">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] place-content-center place-items-center">
                    <Link href="/works/next.js-portfolio">
                        <Image
                            src="/スクリーンショット 2024-05-09 165049.png"
                            alt=""
                            width={500}
                            height={300}
                            className=" border border-black shadow-lg shadow-slate-500 scale-90 hover:scale-100 object-cover duration-500 hover:opacity-70 rounded-lg"
                        />
                    </Link>
                    <Link href="/works/countdown-timer">
                        <Image
                            src="/スクリーンショット 2024-03-22 073247.png"
                            alt=""
                            width={500}
                            height={300}
                            className=" border border-black shadow-lg shadow-slate-500 scale-90 hover:scale-100 object-cover duration-500 hover:opacity-70 rounded-lg"
                        />
                    </Link>
                    <Link href="/works/portfolio-1">
                        <Image
                            src="/スクリーンショット 2024-03-20 024005.png"
                            alt=""
                            width={500}
                            height={300}
                            className=" border border-black shadow-lg shadow-slate-500 scale-90 hover:scale-100 object-cover duration-500 hover:opacity-70 rounded-lg"
                        />
                    </Link>
                    <Link href="/works/corporate-website">
                        <Image
                            src="/スクリーンショット 2024-03-20 030557.png"
                            alt=""
                            width={500}
                            height={300}
                            className=" border border-black shadow-lg shadow-slate-500 scale-90 hover:scale-100 object-cover duration-500 hover:opacity-70 rounded-lg"
                        />
                    </Link>

                    <Link href="/works/clock">
                        <Image
                            src="/スクリーンショット 2024-03-22 073359.png"
                            alt=""
                            width={500}
                            height={300}
                            className=" border border-black shadow-lg shadow-slate-500 scale-90 hover:scale-100 object-cover duration-500 hover:opacity-70 rounded-lg"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}
