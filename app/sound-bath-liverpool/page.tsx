import LandingPageView, { landingMetadata } from "@/components/LandingPage";

export const metadata = landingMetadata("sound-bath-liverpool");

export default function Page() {
  return <LandingPageView slug="sound-bath-liverpool" />;
}
