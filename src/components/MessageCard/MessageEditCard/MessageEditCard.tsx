import { FC } from "react";
import { FaPen } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

type MessageEditButtonProps = {
    id: string;
};

const MessageEditCard: FC<MessageEditButtonProps> = ({ id }) => {
    return (
        <Sheet>
            <SheetTrigger>
                <div className="flex items-center cursor-pointer bg-slate-200 hover:opacity-75 px-4 rounded-lg">
                    <FaPen className="text-lg" />
                    <div className="pl-2">編集</div>
                </div>
            </SheetTrigger>
            <SheetContent
                className=" pt-10 w-screen md:w-[80%] z-[10000]"
                side={"right"}
            >
                <SheetHeader className="mb-4">
                    <SheetTitle className="text-center mb-4">
                        編集 ・ 削除
                    </SheetTitle>
                    <SheetDescription className="text-center">
                        パスワードはこの投稿を再度編集・削除する際に必要となりますので、お気を付けください。
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4 md:mr-8">
                        <Label htmlFor="name" className="text-center">
                            Name
                        </Label>
                        <Input
                            id="name"
                            className="col-span-3"
                            placeholder="name or title here."
                            required
                        />
                    </div>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4 md:mr-8">
                            <Label htmlFor="message" className="text-center">
                                message
                            </Label>
                            <Textarea
                                placeholder="message here."
                                id="message"
                                className="col-span-3"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4 md:mr-8">
                        <Label htmlFor="username" className="text-center">
                            password
                        </Label>
                        <Input
                            id="username"
                            className="col-span-3"
                            placeholder="password here."
                            required
                        />
                    </div>
                </div>
                <SheetFooter className="my-2 flex justify-end items-center">
                    <SheetClose asChild>
                        <button type="submit" className="px-2">
                            <div className=" rounded-full shadow-sm text-white hover:text-opacity-75 bg-gray-800 hover:bg-gray-700 px-6 py-2 text-center">
                                削除
                            </div>
                        </button>
                    </SheetClose>
                    <SheetClose asChild>
                        <button type="submit" className="px-2">
                            <div className=" rounded-full shadow-sm text-white hover:text-opacity-75 bg-gray-800 hover:bg-gray-700 px-6 py-2 text-center">
                                更新
                            </div>
                        </button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default MessageEditCard;
