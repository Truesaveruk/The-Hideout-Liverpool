import LandingPageView, { landingMetadata } from "@/components/LandingPage";

export const metadata = landingMetadata("breathwork-liverpool");

export default function Page() {
  return <LandingPageView slug="breathwork-liverpool" />;
}
