import Image from "next/image";

const Upcoming = () => {
  return ( 
    <div className="flex flex-col justify-center items-center">
      <div className="text-9xl text-nowrap flex items-center animate-infinite-scroll">
        <div className="px-6 -ml-[1500px]"><Image src="/upcomingscrollb.svg" alt="img" height={100} width={1000}/></div>
        <div className="px-6 -ml-[100px]"><Image src="/upcomingscrollw.svg" alt="img" height={100} width={1000}/></div>
        <div className="px-6"><Image src="/upcomingscrollb.svg" alt="img" height={100} width={1000}/></div>
        <div className="px-6"><Image src="/upcomingscrollw.svg" alt="img" height={100} width={1000}/></div>
      </div>
      <div className="flex bg-gray-500 w-4/5 h-[500px] my-14">
        <div className="text-white text-4xl p-4">HORIZON‘24</div>
      </div>
    </div>
   );
}
 
export default Upcoming;