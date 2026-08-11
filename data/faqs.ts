export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "trial" | "compatibility" | "setup" | "payment" | "reseller";
}

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question:
      "Can I try EagleCast TV free before buying a subscription package?",
    answer:
      "Yes. EagleCast TV offers a trial so you can test channel quality, sports streams, and device compatibility before choosing a plan. Click Get Trial to receive setup details directly through support.",
    category: "trial",
  },
  {
    id: "faq-2",
    question: "Which devices and streaming apps are supported?",
    answer:
      "EagleCast TV supports common IPTV app workflows across Smart TVs, Firestick and Fire TV devices, Android phones and tablets, iPhones and iPads, compatible boxes, Windows PCs, and Mac devices.",
    category: "compatibility",
  },
  {
    id: "faq-3",
    question: "How quickly will my IPTV line be activated after ordering?",
    answer:
      "Line activation is near-instant. Once you submit your order or trial request on WhatsApp, our team sends your M3U playlist link, Xtream Codes credentials, and step-by-step setup guide within 2 to 5 minutes.",
    category: "setup",
  },
  {
    id: "faq-4",
    question: "Does EagleCast TV support 4K Ultra HD and sports streams?",
    answer:
      "EagleCast TV is 4K-ready where source availability, device capability, app performance, and internet speed all support higher-resolution playback.",
    category: "compatibility",
  },
  {
    id: "faq-5",
    question: "How many devices can I stream on simultaneously?",
    answer:
      "Standard subscription plans include 1 active connection. If you need multi-screen streaming for family members or multiple rooms, you can easily add extra connections during checkout or via WhatsApp support.",
    category: "compatibility",
  },
  {
    id: "faq-6",
    question: "How does the IPTV Reseller Panel program work?",
    answer:
      "Our Reseller Program provides you with a dedicated Xtream Codes / M3U Management Panel to create, manage, renew, and sell sub-accounts to your own clients. You purchase credit packages with full 24/7 technical backing.",
    category: "reseller",
  },
];
