import { Dancing_Script } from "next/font/google";
import {
    Accordion,
} from "@/components/ui/accordion";
import HistoryCard from "@/components/HistoryCard/HistoryCard";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const learningContents = [
    {
        value: "item-1",
        learningField: "HTML5 & CSS3",
        learningLevel: "★★★★★",
        udemyItems: ["[世界で70万人が受講] Web Developer Bootcamp 2023 (日本語版)（講師:Colt Steele 講師:Ken Fukuyama","【2023年最新】【JavaScript&CSS】ガチで学びたい人のためのWEB開発実践入門（フロントエンド編）(講師:【CodeMafia】 WEBプログラミング学習)"],
        bookItems: ["1冊ですべて身につくHTML & CSSとWebデザイン入門講座 (著者:Mana)","ほんの一手間で劇的に変わるHTML & CSSとWebデザイン実践講座 (著者:Mana)"],
    },
    {
        value: "item-2",
        learningField: "Javascript",
        learningLevel: "★★★★☆",
        udemyItems: ["【JS】ガチで学びたい人のためのJavaScriptメカニズム (講師:【CodeMafia】 WEBプログラミング学習)","JavaScriptをとことんやってみよう【超初心者から脱初心者へレベルアップ】【わかりやすさ重視】(講師:世界のアオキ (Akihiro Aoki))"],
        bookItems: ["1冊ですべて身につくJavaScript入門講座 (著者:Mana)","独習JavaScript 新版 (著者:CodeMafia 外村将大)"],
    },
    {
        value: "item-3",
        learningField: "jQuery",
        learningLevel: "★★★☆☆",
        udemyItems: [],
        bookItems: ["動くWebデザイン アイディア帳(著者:久保田涼子/杉山彰啓)"],
    },
    {
        value: "item-4",
        learningField: "Node.js",
        learningLevel: "★★☆☆☆",
        udemyItems: ["【Next.js/Node.js/Prisma/Supabase】本格的なSNSアプリをフルスタック構築するマスター講座 (講師:Shin Code)"],
        bookItems: ["実践 Node.js 入門 基礎・開発・運用 (著者:伊藤康太)"],
    },
    {
        value: "item-5",
        learningField: "MongoDB",
        learningLevel: "★★★☆☆",
        udemyItems: ["[世界で70万人が受講] Web Developer Bootcamp 2023 (日本語版)（講師:Colt Steele 講師:Ken Fukuyama"],
        bookItems: ["MongoDB 解体新書 (著者:田村 達也)"],
    },
    {
        value: "item-6",
        learningField: "React",
        learningLevel: "★★★☆☆",
        udemyItems: ["【最新ver対応済】モダンJavaScriptの基礎から始める挫折しないためのReact入門 (講師:じゃけぇ (Takumi Okada))","Reactに入門した人のためのもっとReactが楽しくなるステップアップコース完全版 (講師:じゃけぇ (Takumi Okada))","今後のフロントエンド開発で必須知識となるReact v18の機能を丁寧に理解する (講師:じゃけぇ (Takumi Okada))"],
        bookItems: ["モダンJavaScriptの基本から始める React実践の教科書 (著者:じゃけぇ(岡田 拓巳))"],
    },
    {
        value: "item-7",
        learningField: "Next.js",
        learningLevel: "★★★☆☆",
        udemyItems: ["【2024年最新】Next.jsフルスタックWebアプリケーション開発入門 (講師:Yu Shinozaki)","【Next.js13】最新バージョンのNext.js13をマイクロブログ構築しながら基礎と本質を学ぶ講座 (講師:Shin Code)"],
        bookItems: [],
    },
    {
        value: "item-8",
        learningField: "Git",
        learningLevel: "★★★☆☆",
        udemyItems: ["Git： もう怖くないGit！チーム開発で必要なGitを完全マスター (講師:山浦 清透)"],
        bookItems: [],
    },
    {
        value: "item-9",
        learningField: "アルゴリズム",
        learningLevel: "★☆☆☆☆",
        udemyItems: [],
        bookItems: ["JavaScriptによるアルゴリズム入門 (著者:山本 修身)"],
    },
    {
        value: "item-10",
        learningField: "今後の学習予定",
        learningLevel: "☆☆☆☆☆",
        udemyItems: ["プログラミング中級者になりたい人のためのクリーンコード入門 (講師:【CodeMafia】 WEBプログラミング学習)","【世界で7万人が受講】Understanding TypeScript 日本語版 (講師:Yota Hamada /講師:Maximilian Schwarzmüller)"],
        bookItems: ["フロントエンド開発のためのテスト入門 今からでも知っておきたい自動テスト戦略の必須知識 (著者:吉井 健文)"],
    },
];

const History = () => {
    return (
        <div className="bg-white h-full">
            <div className="px-8">
                <h1
                    className={`${dancingScript.className} text-center text-[3rem] lg:text-[4rem] font-bold py-4`}
                >
                    ~ History ~
                </h1>
                <p className="text-center">
                    これまで学習した分野ごとに、受講した教材や学習した書籍を順にまとめています。
                </p>
            </div>
            <div className="w-full my-8 px-10">
                <Accordion type="single" collapsible>
                    {learningContents.map((item, index) => (
                        <HistoryCard
                            key={index}
                            value={item.value}
                            learningField={item.learningField}
                            learningLevel={item.learningLevel}
                            udemyItems={item.udemyItems}
                            bookItems={item.bookItems}
                        />
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default History;
