'use client'

import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";

type Props = {
    chatId: string;
}

function ChatInput({ chatId }: Props) {
    const [prompt, setPrompt] = useState("");
    const { data: session } = useSession();

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!prompt) return;

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user.name}`
            }
        }

        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message)
    };

    return (
        <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
            <form onSubmit={sendMessage} className="p-5 space-x-10 flex-1">
                <input type="text"
                    disabled={!session}
                    className="
                bg-transparent focus:outline-none flex-1 
                disabled:cursor-not-allowed disabled:text-gray-300"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Type your message here..." />
                <button type="submit" disabled={!prompt || !session}
                    className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded
                    disabled:bg-gray-300 disabled:cursor-not-allowed">
                    <PaperAirplaneIcon className="h-4 2-4 -rotate-45" />
                </button>
            </form>

            <div>

            </div>
        </div>
    )
}

export default ChatInput