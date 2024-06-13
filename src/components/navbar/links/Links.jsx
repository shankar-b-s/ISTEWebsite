import Navlink from "./navlink/Navlink";

const Links = () => {

  const linkroll = [
    {
      title:"HOME",
      path:"/",
    },
    {
      title:"PROJECTS",
      path:"/projects",
    },
    {
      title:"WEBINARS",
      path:"/webinars",
    },
    {
      title:"EVENTS",
      path:"/events",
    },
    {
      title:"TEAM",
      path:"/team",
    },
    {
      title:"GALLERY",
      path:"/gallery",
    }
  ]
  return (
    <div>
      {linkroll.map((link=>(
        <Navlink item={link} key={link.title}/>
      )))}
    </div>
  );
}
 
export default Links;