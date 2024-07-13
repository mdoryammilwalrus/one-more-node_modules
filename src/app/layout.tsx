import { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import "./globals.css";
import FAQPage from "@/app/seo.json";

export const metadata: Metadata = {
  title: "Titanium Network",
  description:
    "The official site for Titanium Network, an organization dedicated to providing free access to information by innovating web proxy technologies and bypassing censorship.",
  keywords:
    "proxy, web proxy, unblock websites, unblock chromebook, free web proxy, proxy list, proxy sites, un block chromebook, online proxy, proxy server, proxysite, proxy youtube, bypass securly, bypass iboss, bypass lightspeed filter, holy unblocker, chromebooks, titanium network, unblock youtube, youtube proxy, unblocked youtube, youtube unblocked, Titanium Network, Hypertabs, Securly, iboss, Relay, Lightspeed, Unblock, Bypass, Chromebooks, Alloy Proxy",
  robots: "index, follow, snippet",
  icons: "/logo.png",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: {
    media: "(prefers-color-scheme: dark)",
    color: "#434c5e"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Titanium Network",
              url: "https://titaniumnetwork.org",
              logo: "https://titaniumnetwork.org/logo.png",
              alternateName: "TitaniumNetworkDevelopment",
              sameAs: [
                "https://www.youtube.com/channel/UC6LaREFvs9L72SK1s2PcxNg",
                "https://github.com/titaniumnetwork-dev",
                "https://twitter.com/TitaniumNetDev",
                "https://www.tiktok.com/@tn_unblock",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(FAQPage),
          }}
        ></script>
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
