import Image from "next/image";
import Link from "next/link";

export default function NextjsPortfolio() {
    return (
        <>
            <div className="w-full min-h-screen bg-slate-950 opacity-85">
                <div className="w-full  lg:flex pt-12">
                    <div className="flex justify-center items-center lg:w-[50%]">
                        <Link
                            href={
                                "https://portfolio-next-js-beta-eight.vercel.app/"
                            }
                        >
                            <Image
                                src="/スクリーンショット 2024-05-09 165049.png"
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
                                ポートフォリオ
                            </span>
                        </h1>
                        <dl className="md:flex my-2">
                            <dt className="text-nowrap">製作期間:</dt>
                            <dd className="ml-2">10日</dd>
                        </dl>
                        <dl className="md:flex my-2">
                            <dt className="text-nowrap">使用技術:</dt>
                            <dd className="pl-2">
                                Next.js / tailwindcss / shadcnUI / MongoDB
                                /react-icons / Vercel
                            </dd>
                        </dl>
                        <dl className="md:flex my-2">
                            <dt className="text-nowrap">製作理由:</dt>
                            <dd className="ml-2">
                                Next.jsを学習したタイミングでアウトプット用に作成
                                <br />
                                MongoDBを使用したCRUD操作の復習にと、以前作ったポートフォリオとは別に作成。Next.jsのルーティングやコンポーネントを確認するのをメインとしたため、今回デザインはあまり重視せず、javascript等を使用したアニメーションやスクロールの検知といった動きもほとんど作成していない。
                            </dd>
                        </dl>
                        <div className="flex justify-end items-center mt-8">
                            <Link
                                href={
                                    "https://portfolio-next-js-beta-eight.vercel.app/"
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
                            メッセージ機能としてCRUD操作の機能を組み込んだが、新規作成・編集ページを別のページに分けず、代わりにshadcnUIのコンポーネントを活用。ページ遷移をせずスライドインなどでForm欄を出現させるようにした。
                        </dd>
                    </dl>
                    <dl className="md:flex my-2 py-4 border-b border-sky-800">
                        <dt className="text-nowrap mb-4 md:text-end basis-[15%]">
                            苦労した部分：
                        </dt>
                        <dd className="pl-2 basis-[85%]">
                            UIコンポーネントを使用したが、複数の既存のコンポーネントを条件分岐によって発火させるように組み合わせるのが難しかった。またコンポーネントの中身も少しいじったため、デフォルトのcloseコンポーネント等の一部機能が効かなくなり、別でisOpenのようなstateを保持して機能させるなど工夫する必要があった。こうした調整により、自分のPC
                            localhost上では問題なく動作していたがVercelにいざデプロイしようとした際、MonogoDBとのAPI通信がうまくいかずデプロイエラーが発生し一日費やしてしまった。
                        </dd>
                    </dl>
                    <dl className="md:flex my-2 py-4 border-b border-sky-800">
                        <dt className="text-nowrap mb-4 md:text-end basis-[15%]">
                            今後の改善:
                        </dt>
                        <dd className="ml-2  basis-[85%]">
                            Vercelへのデプロイのエラーは残念ながらいまだに修正できておらず、try
                            catchなどで一時避難させエラーは出つつも残りのデプロイ作業へと進めるように改善した状態である。一瞬API通信でデータをとってくるのに遅延があり、プリレンダリングが正常に実行できていないのが原因のようだった。ローディングに少し時間がかかるが、ページはその後正常に表示されMongoDBからも正常にデータをとってこれているので、現状が今の自分にできる限界となってしまった。
                        </dd>
                    </dl>
                </div>
            </div>
        </>
    );
}
