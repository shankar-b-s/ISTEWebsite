import Image from "next/image";
const Heropage = () => {
  return ( 
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-[160px]">INDIAN SOCIETY</div>
        <div className="text-7xl hover:text-technica ease-in-out">FOR</div>
        <div className="text-[160px] pb-1">TECHNICAL EDUCATION</div>
      </div>
      <div className="border-t-8 border-b-8 border-black w-11/12">
        <div className="py-2 flex justify-between items-center text-7xl">
          <div>WELCOME TO <span className="hover:text-technica ease-in-out">OUR INTERNET</span></div>
          <div><Image src="/herovector.svg" alt="prop" height={100} width={100}/></div>
        </div>
      </div>
    </div>
   );
}
 
export default Heropage;