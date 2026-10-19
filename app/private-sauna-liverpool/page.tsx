import LandingPageView, { landingMetadata } from "@/components/LandingPage";

export const metadata = landingMetadata("private-sauna-liverpool");

export default function Page() {
  return <LandingPageView slug="private-sauna-liverpool" />;
}
