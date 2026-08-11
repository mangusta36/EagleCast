export const contactInfo = {
  email: "support@eaglecast.tv",
  contactEmail: "contact@eaglecast.tv",
  whatsappNumber: "+212753936672",
  whatsappDigits: "212753936672",
  whatsappUrl:
    "https://wa.me/212753936672?text=Hello,%20I%20want%20to%20get%20a%20trial%20for%20EagleCast%20TV.",
  telegram: "https://t.me/eaglecast",
  hours: "24/7 Live Support",
  supportDescription:
    "Need setup help on your Smart TV, Firestick, or Android box? Our support team is available 24/7 on WhatsApp.",
} as const;

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${contactInfo.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
