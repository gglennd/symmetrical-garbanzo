import { createFileRoute } from "@tanstack/react-router";

import { HeroHeader } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <HeroHeader />
      <HeroSection />
    </>
  );
}
