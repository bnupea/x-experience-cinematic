import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "X Experience",
  robots: { index: false, follow: true },
  alternates: { canonical: "/en/" },
};

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0a0a0a", color: "#fff", fontFamily: "sans-serif" }}>
      <meta httpEquiv="refresh" content="0;url=/en/" />
      <a href="/en/">Enter X Experience</a>
    </main>
  );
}
