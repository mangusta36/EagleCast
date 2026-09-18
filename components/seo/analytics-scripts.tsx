import Script from "next/script";

const GSC_VERIFICATION_KEY = "google" as const;

export function buildVerification() {
  const verification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
  return verification ? { [GSC_VERIFICATION_KEY]: verification } : undefined;
}

export function AnalyticsScripts() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}