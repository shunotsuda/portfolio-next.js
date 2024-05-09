import Image from "next/image";
import Link from "next/link";

export default function CorporateWebsite() {
    return (
        <>
            <div className="w-full min-h-screen bg-slate-950 opacity-85">
                <div className="w-full  lg:flex pt-12">
                    <div className="flex justify-center items-center lg:w-[50%]">
                        <Link
                            href={
                                "https://glittery-snickerdoodle-0da34b.netlify.app"
                            }
                        >
                            <Image
                                src="/スクリーンショット 2024-03-20 030557.png"
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
                                架空のコーポレートサイト
                            </span>
                        </h1>
                        <dl className="md:flex my-2">
                            <dt className="text-nowrap">製作期間:</dt>
                            <dd className="ml-2">2日</dd>
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
                                動画教材での学習
                                <br />
                                主にsaasの記法と実践的なjavascriptでのサイトの動きの付け方を学習
                            </dd>
                        </dl>
                        <div className="flex justify-end items-center mt-8">
                            <Link
                                href={
                                    "https://glittery-snickerdoodle-0da34b.netlify.app"
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
                            スライドやhoverのアニメーションを沢山取り入れ、レスポンシブ設計を細部まで心がけている。
                        </dd>
                    </dl>
                    <dl className="md:flex my-2 py-4 border-b border-sky-800">
                        <dt className="text-nowrap mb-4 md:text-end basis-[15%]">
                            苦労した部分：
                        </dt>
                        <dd className="pl-2 basis-[85%]">
                            モバイルメニューのアニメーションに3D要素が入っており、x軸・y軸・z軸の関係を考慮し動きを付けるのが直感的にいかず苦戦した。
                        </dd>
                    </dl>
                    <dl className="md:flex my-2 py-4 border-b border-sky-800">
                        <dt className="text-nowrap mb-4 md:text-end basis-[15%]">
                            今後の改善:
                        </dt>
                        <dd className="ml-2  basis-[85%]">
                            今回は動画教材の内容なので、実際にありそうな企業の内容を自作してみたいと思う
                        </dd>
                    </dl>
                </div>
            </div>
        </>
    );
}
