import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Separator } from "@radix-ui/react-context-menu";
import { MessageCircleMore, SquarePen } from "lucide-react";
import { SelectSeparator } from "../ui/select";

export function Sidebar() {
  return (
    <div>
      <Sheet modal={false} open={true} defaultOpen={true}>
        <SheetContent side="left" showX={false}>
          <div className="flex justify-between mb-5">
            <div className="flex items-center gap-2">
              <MessageCircleMore />
              <p>Chats</p>
            </div>
            <div>
              <SquarePen className="cursor-pointer" />
            </div>
          </div>
          <SelectSeparator />
        </SheetContent>
      </Sheet>
    </div>
  );
}
