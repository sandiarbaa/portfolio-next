import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | SAP",
  description: "Home page of the portfolio",
  icons: {
    icon: "/images/icons/logo.png",
  },
};

export default function Home() {
  return <div>home page</div>;
}
