import { FC, useState } from "react";
import { FaPen } from "react-icons/fa";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogClose,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type MessageEditButtonProps = {
    id: string;
    password: string;
};

const MessageEditButton: FC<MessageEditButtonProps> = ({ id, password }) => {
    const [inputPassword, setInputPassword] = useState("");

    const onClickPassWordValidate = () => {
        if (inputPassword === password) {
        } else {
            alert("パスワードが違います");
        }
    };

    return (
        <div className="flex-grow-0">
            <Dialog>
                <DialogTrigger asChild>
                    <div className="flex items-center cursor-pointer bg-slate-200 hover:opacity-75 px-4 rounded-lg">
                        <FaPen className="text-lg" />
                        <div className="pl-2">編集</div>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
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
                                value={inputPassword}
                                onChange={(e) =>
                                    setInputPassword(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <button type="button" onClick={onClickPassWordValidate}>
                            <div className=" rounded-full shadow-sm text-white hover:text-opacity-75 bg-gray-800 hover:bg-gray-700 px-6 py-2 text-center">
                                OK
                            </div>
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default MessageEditButton;
