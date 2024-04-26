import Image from "next/image";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className=" w-full h-full flex justify-center items-center p-4 md:p-8">
            <div className="group/grayscale p-8 md:p-20 bg-white md:bg-homeCardColor  md:hover:bg-white w-full md:w-[85%] max-w-[950px] shadow-md">
                <div className="flex flex-col items-center lg:flex-row">
                    <div className="relative group/tool-tip">
                        <Image
                            src="/IMG_0406.jpg"
                            alt="photo"
                            width={400}
                            height={400}
                            priority={true}
                            className="relative size-[150px] md:size-[200px] xl:size-[300px] rounded-full object-cover shadow-xl lg:grayscale group-hover/grayscale:grayscale-0"
                        />
                        <span className="absolute bottom-[-2rem] left-0 right-0 text-center text-xs md:text-sm text-slate-600 border-b-2 border-b-slate-300 hidden group-hover/tool-tip:block">
                            沖縄県宮古島&nbsp;&nbsp;&nbsp;&nbsp;2023/08/05
                        </span>
                    </div>
                    <div className="relative flex-1 mt-8 lg:mt-0">
                        <div
                            className={`text-center lg:absolute lg:top-[2rem] lg:left-[-2rem]  text-[1.5rem] lg:text-[2.5rem] md:text-[2rem]  font-bold ${dancingScript.className} tracking-[0.35rem]`}
                        >
                            <span className="relative text-shadow">
                                Otsuda&nbsp;&nbsp;Shun
                            </span>
                        </div>
                        <div className="mt-4 lg:mt-24">
                            <p className="lg:ml-12 text-sm text-slate-900  tracking-wide">
                                お忙しい中、ご確認いただきありがとうございます。個人情報、学歴・職歴、志望動機については履歴書を別途ご用意いたしますので、そちらをご確認いただければと存じます。現在までの経験が主に飲食業界に偏っておりますが、職務経歴書も別途ご用意させていただきます。このポートフォリオでは「Works」に作品を「History」に学習過程をまとめて掲載しております。また、何かしらのコメントや応援のメッセージ、そしてポートフォリオに対するアドバイスなど、どのような内容でも結構ですので、"message"からお寄せいただければ幸いです。どうぞよろしくお願い申し上げます。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
