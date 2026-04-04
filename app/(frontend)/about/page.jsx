import AboutHero from "../../components/about/AboutHero";
import AboutVision from "../../components/about/AboutVision";
import AboutMission from "../../components/about/AboutMission";
import AboutWhatWeDo from "../../components/about/AboutWhatWeDo";
import AboutManifesto from "../../components/about/AboutManifesto";

export default function Page() {
  return (
    <div className="bg-[#d8d8d8] text-black">
      <AboutHero />
        <AboutVision />
         <AboutMission />
              <AboutWhatWeDo />
               <AboutManifesto />
    </div>
  );
}
