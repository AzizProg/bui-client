import { Button } from "./ui/button";
import Logo from '@/components/logo'
import { MouseEventHandler } from "react";


interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;

}
const NavBar = ( { onClick}:ButtonProps) => {
  return (
    <div className="p-2 sm:py-2 sm:px-8 flex justify-between items-center fixed top-0 w-full bg-white z-50">
      <Logo size={50} />
      <div>
        <Button
          variant={"outline"}
          onClick={onClick}
          className="hover:text-white hover:bg-gradient-to-bl hover:from-appcolors-first-color hover:to-appcolors-third-olor hover:duration-300"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
