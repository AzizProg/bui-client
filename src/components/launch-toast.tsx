import { cn } from "@/lib/utils";
import { toast } from "./ui/use-toast";

export default function LaunchToast(variant: any, title: string) {
  return toast({
    duration: 1500,
    className: cn("top-0 fixed w-6/12 mx-auto"),
    variant: variant,
    title: title,
  });
}
