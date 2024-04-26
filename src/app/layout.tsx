import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio | shun",
    description: "スキルや作品を紹介するポートフォリオサイトです",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={`${notoSans.className} ${notoSansJP.className}`}>
                {children}
            </body>
        </html>
    );
}
