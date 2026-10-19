import LandingPageView, { landingMetadata } from "@/components/LandingPage";

export const metadata = landingMetadata("group-bookings-liverpool");

export default function Page() {
  return <LandingPageView slug="group-bookings-liverpool" />;
}
