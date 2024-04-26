import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                mainPageColor: "rgba(214,209,203)", // カスタムカラーの定義
                homeCardColor: "rgb(246, 239, 234, 0.35)", // カスタムカラーの定義
                homeCardColorHover: "rgb(246, 239, 234, 1)", // カスタムカラーの定義
            },
        },
    },
    plugins: [],
};
export default config;
