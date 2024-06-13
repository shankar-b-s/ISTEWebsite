const Videoback = () => {
  return ( 
    <video controls preload="none" className="my-10 mb-24">
      <source src="/harshrun.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
   );
}
 
export default Videoback;