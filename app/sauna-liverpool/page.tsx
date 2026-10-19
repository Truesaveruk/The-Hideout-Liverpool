import LandingPageView, { landingMetadata } from "@/components/LandingPage";

export const metadata = landingMetadata("sauna-liverpool");

export default function Page() {
  return <LandingPageView slug="sauna-liverpool" />;
}
