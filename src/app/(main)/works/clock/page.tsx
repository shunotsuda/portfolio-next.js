import Image from "next/image";
import Link from "next/link";

export default function Clock() {
    return (
        <>
            <div className="w-full min-h-screen bg-slate-950 opacity-85">
                <div className="w-full  lg:flex pt-12">
                    <div className="flex justify-center items-center lg:w-[50%]">
                        <Link
                            href={
                                "https://coruscating-cupcake-f184d9.netlify.app"
                            }
                        >
                            <Image
                                src="/スクリーンショット 2024-03-22 073359.png"
                                alt=""
                                width={500}
                                height={300}
                                className="shadow-lg shadow-slate-500 rounded-lg"
                            />
                        </Link>
                    </div>
                    <div className=" p-8  lg:w-[50%] text-slate-100">
                        <h1 className=" mt-2 mb-6 text-center text-2xl">
                            <span className="border-b-2 border-sky-800">
                                アナログ時計
                            </span>
                        </h1>
                        <dl className="md:flex my-2">
                            <dt className="text-nowrap">製作期間:</dt>
                            <dd className="ml-2">1日</dd>
                        </dl>
                        <dl className="md:flex my-2">
                            <dt className="text-nowrap">使用技術:</dt>
                            <dd className="pl-2">
                                HTML5 / CSS / Javascript / Netlify
                            </dd>
                        </dl>
                        <dl className="md:flex my-2">
                            <dt className="text-nowrap">製作理由:</dt>
                            <dd className="ml-2">
                                javascriptを少し勉強した際に作成
                                <br />
                                書籍で学習した段階のためjavascriptといってもDOM操作程度の知識で作成。取り合えず一番最初に作るなら計算機か時計という他の方のアドバイスで実践。
                            </dd>
                        </dl>
                        <div className="flex justify-end items-center mt-8">
                            <Link
                                href={
                                    "https://coruscating-cupcake-f184d9.netlify.app"
                                }
                            >
                                <div className="w-[200px] flex justify-between items-center text-lg text-sky-400 hover:text-sky-200 border-b border-sky-800 hover:border-sky-200">
                                    <p className="text-nowrap">site view</p>
                                    <p>{">>"}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=" px-4 lg:px-[10%] pb-8  text-slate-100">
                    <dl className="md:flex my-2 py-4 border-y border-sky-800">
                        <dt className="text-nowrap mb-4  md:text-end basis-[15%] ">
                            製作のポイント:
                        </dt>
                        <dd className="ml-2 basis-[85%]">
                            シンプルな製作物だが、初めて動きのある作品を作った。また今後他の製作物にも組み込めるようにデザインにはこだわった。
                        </dd>
                    </dl>
                    <dl className="md:flex my-2 py-4 border-b border-sky-800">
                        <dt className="text-nowrap mb-4 md:text-end basis-[15%]">
                            苦労した部分：
                        </dt>
                        <dd className="pl-2 basis-[85%]">
                            自作でイラストレーターなどを使用してパーツを作ることはできなかったので、無料で使える文字盤の背景を探すのに大変時間がかかった。短針、長針、秒針のパーツは無料で活用できるものが見つからなかった。
                        </dd>
                    </dl>
                    <dl className="md:flex my-2 py-4 border-b border-sky-800">
                        <dt className="text-nowrap mb-4 md:text-end basis-[15%]">
                            今後の改善:
                        </dt>
                        <dd className="ml-2  basis-[85%]">
                            時計の針は自作するか、有料のものをダウンロードしてデザインを改良したい。今回作成したものはアナログ時計なので、デジタル時計のほうも違ったデザインで作成してみたい。
                        </dd>
                    </dl>
                </div>
            </div>
        </>
    );
}
