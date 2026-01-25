import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kansas City Identities | Andrew Douglas Hartzler",
  description:
    "A photography and storytelling project celebrating the diverse identities of Kansas City residents.",
};

export default function KCIdentitiesPage() {
  return (
    <iframe
      src="https://kc-identities.vercel.app"
      className="w-full h-full border-0"
      title="Kansas City Identities"
      allow="autoplay"
    />
  );
}
