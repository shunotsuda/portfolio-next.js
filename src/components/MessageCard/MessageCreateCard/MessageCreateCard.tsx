"use client";

import { IoIosCreate } from "react-icons/io";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

import {
    Sheet,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { FormState, createMessage } from "@/actions/message";
import { useFormState, useFormStatus } from "react-dom";

const MessageCreateCard = () => {
    const initialState: FormState = {
        error: "",
    };
    const [state, formAction] = useFormState(createMessage, initialState);

    const SubmitButton = () => {
        const { pending } = useFormStatus();
        return (
            <button
                type="submit"
                disabled={pending}
                className=" rounded-full shadow-sm text-white hover:text-opacity-75 bg-gray-800 hover:bg-gray-700 px-6 py-2 text-center disabled:bg-gray-400"
            >
                投稿
            </button>
        );
    };
    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <div className=" flex items-center gap-1 text-[1rem] md:text-sm md:font-semibold border border-white px-2 md:px-4 py-2 md:py-3 mr-4 rounded-full shadow-sm text-slate-950 hover:text-opacity-75 bg-slate-300 hover:opacity-75">
                        <IoIosCreate className="md:size-5" />
                        <div className="pr-2">
                            新規作成
                        </div>
                    </div>
                </SheetTrigger>
                <SheetContent
                    className=" pt-10 w-screen md:w-[80%] z-[10000]"
                    side={"right"}
                >
                    <SheetClose className="absolute right-4 top-4 md:top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 bg-secondary">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close</span>
                    </SheetClose>
                    <SheetHeader className="mb-4">
                        <SheetTitle className="text-center mb-4">
                            新規メッセージ作成
                        </SheetTitle>
                        <SheetDescription className="text-center">
                            パスワードはこの投稿を編集・削除する際に必要となりますので、お気を付けください。
                        </SheetDescription>
                    </SheetHeader>
                    <form action={formAction}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4 md:mr-8">
                                <Label htmlFor="name" className="text-center">
                                    Name
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="col-span-3"
                                    placeholder="name or title here."
                                    required
                                />
                            </div>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4 md:mr-8">
                                    <Label
                                        htmlFor="message"
                                        className="text-center"
                                    >
                                        message
                                    </Label>
                                    <Textarea
                                        placeholder="message here."
                                        id="message"
                                        name="message"
                                        className="col-span-3"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4 md:mr-8">
                                <Label
                                    htmlFor="password"
                                    className="text-center"
                                >
                                    password
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    className="col-span-3"
                                    placeholder="password here."
                                    required
                                />
                            </div>
                        </div>
                        <SheetFooter className="my-4 mr-8">
                            <SheetClose>
                                <SubmitButton />
                            </SheetClose>
                        </SheetFooter>
                    </form>
                    {state && state.error && (
                        <p className="mt-2 text-red-500 text-sm">
                            {state.error}
                        </p>
                    )}
                </SheetContent>
            </Sheet>
        </>
    );
};

export default MessageCreateCard;
