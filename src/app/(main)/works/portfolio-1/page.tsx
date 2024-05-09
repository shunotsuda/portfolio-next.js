import Image from "next/image";
import Link from "next/link";

export default function Portfolio1() {
    return (
        <>
            <div className="w-full min-h-screen bg-slate-950 opacity-85">
                <div className="w-full  lg:flex pt-12">
                    <div className="flex justify-center items-center lg:w-[50%]">
                        <Link
                            href={
                                "https://merry-empanada-2347e8.netlify.app"
                            }
                        >
                            <Image
                            src="/スクリーンショット 2024-03-20 024005.png"
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
                            初めに作ったポートフォリオ
                            </span>
                        </h1>
                        <dl className="md:flex my-2">
                            <dt className="text-nowrap">製作期間:</dt>
                            <dd className="ml-2">3日</dd>
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
                                HTML・CSS・JavaScriptまで学習を終えたタイミングでアウトプット用に作成{" "}
                                <br />
                                ポートフォリオの提出を求められたときのために当時作成
                            </dd>
                        </dl>
                        <div className="flex justify-end items-center mt-8">
                            <Link
                                href={
                                    "https://merry-empanada-2347e8.netlify.app"
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
                            レイアウトの余ったスペースの違和感を消せるように、文字をずらしたり、縦書きを取り入れたりした。またフォントサイズをすべて相対的にし、画面の幅を変更しても比率が変わらないようにした。
                        </dd>
                    </dl>
                    <dl className="md:flex my-2 py-4 border-b border-sky-800">
                        <dt className="text-nowrap mb-4 md:text-end basis-[15%]">
                            苦労した部分：
                        </dt>
                        <dd className="pl-2 basis-[85%]">
                        当時は完全にオリジナルのものを作成しようと思い他のサイトなどは参考にせずに作成。デザインの構想もハッキリとしないまま作り始めたために後で後悔しました。作っている時間より何をポートフォリオに書こう？どうレイアウトしよう？といった悩みでほとんどの時間を持っていかれました。デザイナーの方々...尊敬します。
                        </dd>
                    </dl>
                    <dl className="md:flex my-2 py-4 border-b border-sky-800">
                        <dt className="text-nowrap mb-4 md:text-end basis-[15%]">
                            今後の改善:
                        </dt>
                        <dd className="ml-2  basis-[85%]">
                           作成する前にスムーズに進むよう決めるところは決めてから作成に取り掛かるようにしたいと思います。ただそれもなかなか時間がかかるので、実践的な経験をもっともっと積まないといけないです。
                        </dd>
                    </dl>
                </div>
            </div>
        </>
    );
}
