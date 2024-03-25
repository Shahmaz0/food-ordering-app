import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Menu} from "lucide-react";
import {Separator} from "@/components/ui/separator.tsx";
import {Button} from "@/components/ui/button.tsx";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className= "flex items-center  text-orange-500 "/>
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>
                    <span>Welcome to MernEats.com!</span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}
export default MobileNav;