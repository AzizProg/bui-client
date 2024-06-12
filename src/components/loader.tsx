import Image from 'next/image';


const Loader=()=>{
    return (
    <div className="flex items-center justify-center min-h-screen">
    <Image
    
      src="/loading.gif"
      width={100}
      height={100}
      alt="Loading"
      priority
      loading='eager'
    />
  </div>)
}

export default  Loader;