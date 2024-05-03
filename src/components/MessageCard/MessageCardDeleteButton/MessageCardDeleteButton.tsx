"use client";

import { FormState, deleteMessage } from "@/actions/message";
import { FC, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

interface DeleteProps {
    id: string;
    closeSheet: () => void;
}

const MessageCardDeleteButton: FC<DeleteProps> = ({ id, closeSheet }) => {
    const deleteMessageID = deleteMessage.bind(null, id);
    const InitialState: FormState = { error: "" };
    const [state, formAction] = useFormState(deleteMessageID, InitialState);
    useEffect(() => {
        if (state && state.error !== "") {
            alert(state.error);
        }
    }, [state]);

    const DeleteButton = () => {
        const { pending } = useFormStatus();
        useEffect(() => {
            if (pending) {
                closeSheet();
            }
        }, [pending]);
        return (
            <form action={formAction} >
                <button
                    type="submit"
                    disabled={pending}
                    className="m-8 md:mx-10 my-2  rounded-full shadow-sm text-white hover:text-opacity-75 bg-red-800 hover:bg-gray-700 px-6 py-2 text-center disabled:bg-gray-400"
                >
                    削除
                </button>
            </form>
        );
    };
    return (
        <div className="relative">
            <DeleteButton />
        </div>
    );
};

export default MessageCardDeleteButton;
