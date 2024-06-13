import Aboutus from "@/components/aboutus/Aboutus";
import Domain from "@/components/domains/Domains";
import Heropage from "@/components/heropage/Heropage";
import Upcoming from "@/components/upcomingevents/Upcoming";
import Videoback from "@/components/videoback/Videoback";
import Projectshero from "@/components/projectshero/Projectshero";
import Eventshero from "@/components/eventshero/Eventshero";
import Webinarhero from "@/components/webinarhero/Webinarhero";
import Partnershero from "@/components/partnershero/Partnershero";

export default function Home() {
  return (
    <div className="mt-16 flex flex-col w-full p-0 m-0">
      <Heropage/>
      <Videoback/>
      <Upcoming/>
      <Aboutus/>
      <Domain/>
      <Projectshero/>
      <Eventshero/>
      <Webinarhero/>
      <Partnershero/>
    </div>
  );
}
