import Navbars from "@/components/Navbars";
import Homes from "@/components/Homes";
import Footers from "@/components/Footers";
import DocumentHead from "@/components/Molecules/DocumentHead";

export default function Home() {
  return (
    <>
      <DocumentHead
        title="CycGods!"
        description="CycGods!"
        baseUrl="https://cycgods.vercel.app/"
        favicon="/assets/Eyes.png"
        siteName="CycGods"
        image="/assets/Logo.png"
      />
      <div>
        <Navbars />
        <Homes />
        <Footers />
      </div>
    </>
  );
}
