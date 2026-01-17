import { useUser } from "@clerk/clerk-react";

export function usePlan() {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) {
    return { plan: "loading" };
  }

  // Clerk billing subscriptions (THIS is real data)
  const subs = user?.subscriptions;

  const activeSub = subs?.find(
    (s) => s.status === "active"
  );

  return {
    plan: activeSub?.plan?.key || "free_user",
  };
}
