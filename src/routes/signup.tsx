import { createFileRoute } from "@tanstack/react-router";

import SignupPage from "@/components/sign-up";

export const Route = createFileRoute("/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignupPage />;
}
