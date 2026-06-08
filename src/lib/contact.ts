export const PHONE_NUMBER = "+919520791847";
export const PHONE_DISPLAY = "+91 95207 91847";
export const WHATSAPP_NUMBER = "919520791847";
export const WHATSAPP_MESSAGE = "Hi Muskan";

export function buildWhatsAppUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export function buildBrochureRequestMessage(
  name: string,
  phone: string,
  course: string
) {
  return `Hi Muskan, I'd like to request the course brochure.

Name: ${name}
Phone: ${phone}
Course: ${course}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl(WHATSAPP_MESSAGE);
export const ACADEMY_EMAIL = "academy@mbmsalon.com";
export const INSTAGRAM_URL = "https://www.instagram.com/mbmsalon_shikohabad/";
export const INSTAGRAM_REEL_URL = "https://www.instagram.com/reel/DVlhCB6jKhW/";
export const INSTAGRAM_REEL_URL_2 = "https://www.instagram.com/reel/DXCHMKogVOR/";
export const INSTAGRAM_REEL_URL_3 = "https://www.instagram.com/reel/DY4lR9Ihm6Y/";
export const INSTAGRAM_REEL_URL_4 = "https://www.instagram.com/reel/DTSlzziElPb/";
