import Image from 'next/image';
interface BuiLogProps{
  size:number

}
const Logo = ({size}:BuiLogProps) => {
  return (
    <Image
      src="/logo.png"
      width={size}
      height={size}
      alt="Bui logo"
    />
  );
};

export default Logo;
