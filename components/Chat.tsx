type Props = {
    chatId:string;
}

function Chat({chatId}:Props) {
  return (
    <div className="flex-1">Chat : {chatId}</div>
  )
}

export default Chat