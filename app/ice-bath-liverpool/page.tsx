import LandingPageView, { landingMetadata } from "@/components/LandingPage";

export const metadata = landingMetadata("ice-bath-liverpool");

export default function Page() {
  return <LandingPageView slug="ice-bath-liverpool" />;
}
