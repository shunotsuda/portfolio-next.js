import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Logo = () => {
    return (
        <div>
            <Link href={"/"}>
                <div
                    className={`${dancingScript.className} px-4 text-2xl md:text-4xl font-bold`}
                >
                    &nbsp;shun
                    <br /> &nbsp;~portfolio~
                </div>
            </Link>
        </div>
    );
};

export default Logo;
