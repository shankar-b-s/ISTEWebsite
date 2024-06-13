import Link from "next/link";

const Navlink = ({item}) => {
  return ( 
    <Link href={item.path} key={item.title} className="px-3 hover:bg-black hover:text-white">
      {item.title}
    </Link>
   );
}
 
export default Navlink;