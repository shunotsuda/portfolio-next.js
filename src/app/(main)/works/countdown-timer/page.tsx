import Image from "next/image";
import Link from "next/link";

export default function CountdownTimer() {
    return (
        <>
            <div className="w-full min-h-screen bg-slate-950 opacity-85">
                <div className="w-full  lg:flex pt-12">
                    <div className="flex justify-center items-center lg:w-[50%]">
                        <Link
                            href={
                                "https://cheerful-daffodil-ee4bca.netlify.app/"
                            }
                        >
                            <Image
                                src="/スクリーンショット 2024-03-22 073247.png"
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
                                カウントダウンタイマー
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
                                javascriptを学習したタイミングでアウトプット用に作成{" "}
                                <br />
                                今後飲食店時代に溜まりに溜まった自分のレシピをまとめるアプリケーションを自作しようと考え、その際に画面にワンタッチで時間を計れるような小さなパーツが欲しいと思い作成
                            </dd>
                        </dl>
                        <div className="flex justify-end items-center mt-8">
                            <Link
                                href={
                                    "https://cheerful-daffodil-ee4bca.netlify.app/"
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
                            最初に作ったものはcanvasで描写したが、最後まで滑らかに動くようなタイマーが欲しいと思いclippathで作成。
                        </dd>
                    </dl>
                    <dl className="md:flex my-2 py-4 border-b border-sky-800">
                        <dt className="text-nowrap mb-4 md:text-end basis-[15%]">
                            苦労した部分：
                        </dt>
                        <dd className="pl-2 basis-[85%]">
                            秒数のカウントのタイミングでcanvasで描写するのと違ってclippathでアニメーションをかけるのには苦労した。また円を一周するように描写するのが難しく最終的にpathのポイントを７つ作り、12.5%ごとにアニメーションをかけることで完成した。
                        </dd>
                    </dl>
                    <dl className="md:flex my-2 py-4 border-b border-sky-800">
                        <dt className="text-nowrap mb-4 md:text-end basis-[15%]">
                            今後の改善:
                        </dt>
                        <dd className="ml-2  basis-[85%]">
                            カウントをクリックで一時停止する機能も作ったが、厳密に残りの秒数と描画を合わせていないので、クリックを連打すると少しずつ残りのカウント秒数とアニメーションがずれていくという問題が発生するので修正したいと思う。
                        </dd>
                    </dl>
                </div>
            </div>
        </>
    );
}
