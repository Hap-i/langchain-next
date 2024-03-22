import Image from "next/image";
import { Sidebar } from "../components/sidebar/sidebar";
import ChatArea from "../components/chatbox/chatArea";

export default function Home() {
  return (
    <div className="flex justify-center gap-3 h-full">
      {/* <div className="w-1/4">
        <Sidebar />
      </div> */}
      <div className="md:w-3/4 w-full h-full">
        <ChatArea></ChatArea>
      </div>
    </div>
  );
}
