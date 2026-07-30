import { useParams } from "react-router-dom";
import ProspectLanding from "./ProspectLanding";
import DentalCentralLanding from "./DentalCentralLanding";
import prospectsData from "../data/prospects.json";

export default function ProspectLandingRoute() {
  const { slug } = useParams();
  const prospect = prospectsData.prospects.find((p) => p.slug === slug);

  if (slug === "dental-central-dr-ghanwa-model-town" && prospect) {
    return <DentalCentralLanding prospect={prospect} />;
  }

  return <ProspectLanding slug={slug} />;
}
