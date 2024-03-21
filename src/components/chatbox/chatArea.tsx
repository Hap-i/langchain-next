import React from "react";
import { Button } from "../ui/button";
import { SelectSeparator } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Dot, SendHorizontal } from "lucide-react";

const ChatArea = () => {
  return (
    <div className="p-1 h-screen">
      <div className="flex justify-between mt-5 mb-5 px-2">
        <p>Chat with JLR Assistant</p>
        <div className="flex gap-2 items-center">
          <div className="h-3 w-3 border rounded-full bg-green-500"></div>
          <p>Generating</p>
        </div>
      </div>
      <SelectSeparator></SelectSeparator>
      <div className="flex flex-col h-4/5">
        <div className="border flex-grow rounded-md"></div>
        <div className="mt-2 relative">
          <Textarea
            className="pl-3 pr-36 min-h-[120px]"
            placeholder="Type your message here."
          />
          <div className="absolute top-[25%] right-5">
            <Button className="flex gap-2">
              <p>Send</p>
              <SendHorizontal size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
