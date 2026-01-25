import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kansas City Identities | Andrew Douglas Hartzler",
  description:
    "A photography and storytelling project celebrating the diverse identities of Kansas City residents.",
};

export default function KCIdentitiesPage() {
  return (
    <main className="min-h-screen w-full">
      <iframe
        src="https://kc-identities.vercel.app"
        className="w-full h-screen border-0"
        title="Kansas City Identities"
        allow="autoplay"
      />
    </main>
  );
}
