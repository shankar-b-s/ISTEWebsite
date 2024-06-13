
const Gridlink = ({item}) => {
  return ( 
    <div className="split-img-c flex ">
      <span className={`split-img-m w-[540px] h-[540px] bg-cover my-6 hover:mx-[14px] transition-all ease-in-out duration-500`}
      style={{backgroundImage: `url(${item.path})`}}></span>
      <span className={`split-img-m w-[540px] h-[540px] bg-cover my-6 bg-pos-x-400 hover:mx-[14px] transition-all ease-in-out duration-500`}
      style={{backgroundImage: `url(${item.path})`}}></span>
      <span className={`split-img-m w-[540px] h-[540px] bg-cover my-6 bg-pos-x-800 hover:mx-[14px] transition-all ease-in-out duration-500`}
      style={{backgroundImage: `url(${item.path})`}}></span>
    </div>  
   );
}
 
export default Gridlink;