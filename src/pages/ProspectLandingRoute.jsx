import { useParams } from "react-router-dom";
import ProspectLanding from "./ProspectLanding";

export default function ProspectLandingRoute() {
  const { slug } = useParams();
  return <ProspectLanding slug={slug} />;
}
