import Gridlink from "./gridlink/Gridlink";

const Grid = () => {
  const gridpaths = [
    {
      title: "Technica",
      path:"/technicagrid.png",
    },
    {
      title: "Pygame",
      path:"/pygamegrid.png",
    },
    {
      title:"Pulsync",
      path: "/pulsyncgrid.png",
    }
  ]
  return ( 
    <div>
      {gridpaths.map((path=>(
        <Gridlink item={path} key={path.title}/>
      )))}
    </div>
   );
}
 
export default Grid;