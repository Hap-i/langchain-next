"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { SelectSeparator } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Dot, SendHorizontal } from "lucide-react";
import { chain } from "../../utils/chain";
import { formatConvHistory } from "../../utils/formatConvHistory";

const ChatArea = () => {
  const [userQuestion, setuserQuestion] = useState("");
  const [chatHistory, setchatHistory] = useState<
    { message: string; sender: string }[]
  >([]);
  const chatAreaRef = useRef<HTMLDivElement | null>(null);

  const handleTextAreaChange = (event: any) => {
    setuserQuestion(event.target.value);
  };
  const handleClick = async () => {
    setchatHistory([...chatHistory, { message: userQuestion, sender: "user" }]);
    setuserQuestion("");
  };
  const getOpenAIResponse = async (chatHis: any) => {
    const response = await chain.invoke({
      question: userQuestion,
      conv_history: formatConvHistory([...chatHis]),
    });
    setchatHistory([...chatHis, { message: response, sender: "bot" }]);
  };
  useEffect(() => {
    if (chatHistory.slice(-1)[0]?.sender == "user") {
      getOpenAIResponse(chatHistory);
    }
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current?.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="p-1 h-screen">
      <div className="flex justify-between mt-5 mb-5 px-2">
        <p>Personal Assistant</p>
        <div className="flex gap-2 items-center">
          <div className="h-3 w-3 border rounded-full bg-green-500"></div>
          <p>Generating</p>
        </div>
      </div>
      <SelectSeparator></SelectSeparator>
      <div className="flex flex-col h-4/6 overflow-y-scroll" ref={chatAreaRef}>
        <div className="border flex-grow rounded-md p-2 space-y-1 relative">
          {chatHistory.map((item, index) => (
            <div
              key={index}
              className={
                item.sender == "user" ? "flex justify-end w-full mb-1" : "mb-1"
              }>
              <p className={item.sender == "user" ? "user-chat" : "bot-chat"}>
                {item.message}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 relative">
        <Textarea
          value={userQuestion}
          onChange={handleTextAreaChange}
          className="pl-3 pr-36 min-h-[120px]"
          placeholder="Type your message here."
        />
        <div className="absolute top-[25%] right-5">
          <Button className="flex gap-2" onClick={handleClick}>
            <p>Send</p>
            <SendHorizontal size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
