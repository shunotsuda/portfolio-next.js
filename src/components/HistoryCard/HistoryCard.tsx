import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FC } from "react";

interface learningContentProps {
    value: string;
    learningField: string;
    learningLevel: string;
    udemyItems: Array<string>;
    bookItems: Array<string>;
}

const HistoryCard: FC<learningContentProps> = ({
    value,
    learningField,
    learningLevel,
    udemyItems,
    bookItems,
}) => {
    return (
        <>
            <AccordionItem value={value}>
                <AccordionTrigger>{learningField}</AccordionTrigger>
                <AccordionContent className="text-black">
                    <p className=" px-4 leading-10">学習度 {learningLevel}</p>
                    <ul className="leading-10">
                        {udemyItems.length !== 0 && (
                            <li className="px-4 list-item">
                                <span className="text-lg relative pl-4">
                                    Udemy{"(動画教材)"}
                                    <div className="absolute inset-y-0 left-0 w-2 bg-blue-800"></div>
                                </span>
                                <ul className="px-8">
                                    {udemyItems.map((item, index) => (
                                        <li key={index} className="list-disc">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )}
                        {bookItems.length !== 0 && (
                            <li className="px-4 list-item">
                                <span className="text-lg relative pl-4">
                                    書籍
                                    <div className="absolute inset-y-0 left-0 w-2 bg-orange-500"></div>
                                </span>
                                <ul className="px-8">
                                    {bookItems.map((item, index) => (
                                        <li key={index} className="list-disc">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )}
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </>
    );
};

export default HistoryCard;
