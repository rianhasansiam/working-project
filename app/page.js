import Image from "next/image";
import Hero from "./component/Hero";
import PlacementMethod from "./component/PlacementMethod";
import InteractiveLearning from "./component/InteractiveLearning";

export default function Home() {
  return (
    <div>
      <Hero />
      <PlacementMethod />
      <InteractiveLearning />
    </div>
  );
}
