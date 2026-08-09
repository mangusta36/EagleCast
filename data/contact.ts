export const contactInfo = {
  email: "support@eaglecast.tv",
  contactEmail: "contact@eaglecast.tv",
  whatsappNumber: "+212 753-936672",
  whatsappDigits: "212753936672",
  whatsappUrl:
    "https://wa.me/212753936672?text=Hello,%20I%20want%20to%20start%20my%20Free%20IPTV%20Trial%20on%20eaglecast",
  telegram: "https://t.me/eaglecast",
  hours: "24/7 Live Support",
  supportDescription:
    "Need setup help on your Smart TV, Firestick, or Android box? Our support team is available 24/7 on WhatsApp.",
} as const;

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${contactInfo.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
