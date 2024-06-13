import Link from "next/link";
import Grid from "./grid/Grid";
import { FaArrowRight } from "react-icons/fa6";

const Eventshero = () => {
  return ( 
    <div className="my-10 flex flex-col justify-center items-center">
      <div className="text-9xl py-8 border-black border-b-4">EVENTS</div>
      <Grid />
      <div className="flex items-center text-3xl py-4">
        <div>Explore all our events</div>
        <Link href="/events " className="px-4"><FaArrowRight /></Link>
      </div>
    </div>
   );
}
 
export default Eventshero;