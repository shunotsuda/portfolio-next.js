"use client";

import { FC, useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { MessageDocument } from "@/models/message";
import { FormState, deleteMessage, updateMessage } from "@/actions/message";
import { useFormState, useFormStatus } from "react-dom";
import MessageCardDeleteButton from "../MessageCardDeleteButton/MessageCardDeleteButton";

type MessageEditButtonProps = {
    message: MessageDocument;
};

const MessageEditCard: FC<MessageEditButtonProps> = ({ message }) => {
    //valueの初期値用
    const [editName, setEditName] = useState(message.name);
    const [editMessage, setEditMessage] = useState(message.message);
    const [editPassword, setEditPassword] = useState(message.password);

    const [isOpen, setIsOpen] = useState(false);
    const [validatePassword, setValidatePassword] = useState("");
    const [PasswordFlag, setPasswordFlag] = useState(false);

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => {
        setValidatePassword("");
        setIsOpen(false);
    };
    const closeSheet = () => {
        setPasswordFlag(false);
    };

    const handleConfirm = () => {
        if (validatePassword === message.password) {
            setPasswordFlag(true);
            closeDialog();
        } else {
            alert("パスワードが違います");
        }
    };

    const updateMessageID = updateMessage.bind(null, message._id);
    const initialState: FormState = { error: "" };
    const [state, formUpdateAction] = useFormState(
        updateMessageID,
        initialState
    );

    const UpdateButton = () => {
        const { pending } = useFormStatus();
        useEffect(() => {
            if (pending) {
                closeSheet(); // 更新が成功したら状態を更新
            }
        }, [pending]);
        return (
            <button
                type="submit"
                disabled={pending}
                className="m-8 md:mx-10 my-2 rounded-full shadow-sm text-white hover:text-opacity-75 bg-green-700 hover:bg-gray-700 px-6 py-2 text-center disabled:bg-gray-400"
            >
                更新
            </button>
        );
    };

    return (
        <div className="flex-grow-0">
            <Dialog open={isOpen}>
                <DialogTrigger>
                    <div
                        className="flex items-center cursor-pointer bg-slate-200 hover:opacity-75 px-4 py-1 rounded-lg"
                        onClick={openDialog}
                    >
                        <FaPen className="text-lg" />
                        <div className="pl-2 ">編集</div>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogClose className="absolute right-4 top-4 md:top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 bg-secondary">
                        <X className="h-4 w-4" onClick={closeDialog} />
                        <span className="sr-only">Close</span>
                    </DialogClose>
                    <DialogHeader>
                        <DialogTitle className="mb-2">
                            Please Password
                        </DialogTitle>
                        <DialogDescription>
                            作成したときに登録したパスワードを入力してください。
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="password" className="text-right">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                className="col-span-3 border"
                                value={validatePassword}
                                onChange={(e) =>
                                    setValidatePassword(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <button type="button" onClick={handleConfirm}>
                            <div className=" rounded-full shadow-sm text-white hover:text-opacity-75 bg-gray-800 hover:bg-gray-700 px-6 py-2 text-center">
                                OK
                            </div>
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            {PasswordFlag && (
                <Sheet open={PasswordFlag}>
                    <SheetContent
                        className=" pt-10 w-screen md:w-[80%] z-[10000]"
                        side={"right"}
                    >
                        <SheetClose className="absolute right-4 top-4 md:top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 bg-secondary">
                            <X className="h-6 w-6" onClick={closeSheet} />
                            <span className="sr-only">Close</span>
                        </SheetClose>
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
                                    form="updateForm"
                                    id="name"
                                    name="name"
                                    className="col-span-3"
                                    value={editName}
                                    onChange={(e) =>
                                        setEditName(e.target.value)
                                    }
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
                                        form="updateForm"
                                        placeholder="message here."
                                        id="message"
                                        name="message"
                                        className="col-span-3"
                                        value={editMessage}
                                        onChange={(e) =>
                                            setEditMessage(e.target.value)
                                        }
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
                                    form="updateForm"
                                    id="password"
                                    name="password"
                                    className="col-span-3"
                                    value={editPassword}
                                    onChange={(e) =>
                                        setEditPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <SheetFooter className="flex  justify-center md:justify-end items-center  ">
                            <form action={formUpdateAction} id="updateForm">
                                <UpdateButton />
                            </form>
                            <MessageCardDeleteButton
                                id={message._id}
                                closeSheet={() => closeSheet()}
                            />
                        </SheetFooter>
                        {state && state.error !== "" && (
                            <p className="mt-2 text-red-500 text-sm">
                                {state.error}
                            </p>
                        )}
                    </SheetContent>
                </Sheet>
            )}
        </div>
    );
};

export default MessageEditCard;
