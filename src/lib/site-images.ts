/** Central image paths — upload matching files to public/images/ (see public/images/README.md) */

const useLocal = process.env.NEXT_PUBLIC_USE_LOCAL_PHOTOS === "true";

const FALLBACKS = {
  doctorPortrait:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCeoZkBYzn93ZY5eHYUUVXZKScDqSl4PilFvk0YMZi7yu3lIqh9KXLHADwpsnMvceBYYu6UR2bZUrv9KQYVwNvnE92ZZpbHcJLKLCxB80CEA13jwP7A6sjZ0GT5LFUn9d7OrsX3MK6-1eKi69xngkuoLl7Wos_8Xva82ZTiFzWKb2696wF702noRassWo_iPwVmpbj-45zzcxcBBvWZUtJN0h7QSWmYY-VGxNoSADl7wzyN0wF6jajP7hmQsjvg7pULU-fceNNYYUc",
  heroMain:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAm8al5naOx-QQ-lNFcajeZGEjjiIGhO-kj_rAIxSvkEFrAW-2DEaxpjwDUhEfYFwZ40gTWfaq2Uz3DCzE2YUT9ndY30fpKW0PcTojUJpU6-QpyvGQKA4rkSV6IHdFxxPyZBf3QlQRnykgsxKp2-zyhQn3Z5aNOgUacjeoBbm7fu6xhG2CNF0Ng-o1Hrq2y2D4Udu_MV4nirnsKhnlACWz4PO6xOvZBv5skM9KrBsONS02KWLcGnAYAxCn4MlEnlwO2HsJ_rlwgb5g",
  sensoryGym:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAcAszxr_aw7t2MBMC5q7Zdqqdz8C8Ha0zWn8ssz-mL9RU0cThEtPr055IlAYzGk-RFbotjgKGOCTNig_SQTeYmHk-bj-qhRzbsLVjUTMhgjMY8pOKrOaY0QxZOw9OreLZ2JpXVi2reTXBYgW_28gLkkmEO52fFiD2pCy4WIQea6LsvLKIC7SIVOe18xylTbcBE2DEj1dfNiBzZcSD9qe0AWaRbyc1O-a6GhdqvB9XaS7WZa-lZfF8ef6_59aDZcckn1vkLedvBlK4",
  assessmentRoom:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA1tGtJdDw-86lEdpx-I69_MlMGwrBW_XudUkEM3fusMOYLjKWRBGhxlQXcJR4mhDJxpx1ySvxAwQEZqUlk3JHxsG-gqsmEzKKnkQRTL3KY3UcxWGUXiear5U9ppi84HnEiKs3cgsp3IMON5-swfmKiIeu3u3pukQyWIxAxcI8Sfthn2m04HLMGiBml4ymcem3d8o8PDYtb7ZQ-kZSY9iWaPfjay2RoYV5RT-o-EU5zjCZx1gof8J8eAj0oIRssT38aasQo6NxrRSc",
  aquaticArea:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD64jn5OFwenkccgK2NlqJOvDh9H9CxtBDZhju6lbekQ8OIi_-WJfZhTCup3Hj3RRP1rro1sfhBsHWkqVcWYUnQnvmVkjpAiputk_ytiPQRxf1QwvrpkXhdl196BO9KLUuLeK-QP6460pPQjyyMlu6k1UTRNa84k3Kj2RwPb-BBS6XUtw6oi9t_fDSBTpLfMQv4v1TFE8hUbKJVXHajE2MNqTAHbWV3Wh91B7SaC0AHMfBC0Klyok_BwrPOHRaL2tpQQ9mcpWXutRw",
  reception:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA79cJAmtLdSx0b822x31t77ABNVo2UpWxWBOmFfakt3tQ6owyMMw8r8TtBUXYGzROV9xodjRQ6I_RpH7Tr7zp3R6ITT-ao-rBDZbC-7d3w68luZv0d7z7iXAyc2zOWAb8xneDXsX_KwkJCn7waH_kip3cct7Opxf-iYKl-bZ4OjkREohRNNxVZ3tdmNQp-YO5MlWs4W2SJRlshpMFw26UNnyju34Gq3T1IzaWXkY7_NHvWO_1JfB7LocCtKP8aKLlOf67GxWfmqfI",
  exterior:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAcAszxr_aw7t2MBMC5q7Zdqqdz8C8Ha0zWn8ssz-mL9RU0cThEtPr055IlAYzGk-RFbotjgKGOCTNig_SQTeYmHk-bj-qhRzbsLVjUTMhgjMY8pOKrOaY0QxZOw9OreLZ2JpXVi2reTXBYgW_28gLkkmEO52fFiD2pCy4WIQea6LsvLKIC7SIVOe18xylTbcBE2DEj1dfNiBzZcSD9qe0AWaRbyc1O-a6GhdqvB9XaS7WZa-lZfF8ef6_59aDZcckn1vkLedvBlK4",
  hallway:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA1tGtJdDw-86lEdpx-I69_MlMGwrBW_XudUkEM3fusMOYLjKWRBGhxlQXcJR4mhDJxpx1ySvxAwQEZqUlk3JHxsG-gqsmEzKKnkQRTL3KY3UcxWGUXiear5U9ppi84HnEiKs3cgsp3IMON5-swfmKiIeu3u3pukQyWIxAxcI8Sfthn2m04HLMGiBml4ymcem3d8o8PDYtb7ZQ-kZSY9iWaPfjay2RoYV5RT-o-EU5zjCZx1gof8J8eAj0oIRssT38aasQo6NxrRSc",
  sensoryTools:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAm8al5naOx-QQ-lNFcajeZGEjjiIGhO-kj_rAIxSvkEFrAW-2DEaxpjwDUhEfYFwZ40gTWfaq2Uz3DCzE2YUT9ndY30fpKW0PcTojUJpU6-QpyvGQKA4rkSV6IHdFxxPyZBf3QlQRnykgsxKp2-zyhQn3Z5aNOgUacjeoBbm7fu6xhG2CNF0Ng-o1Hrq2y2D4Udu_MV4nirnsKhnlACWz4PO6xOvZBv5skM9KrBsONS02KWLcGnAYAxCn4MlEnlwO2HsJ_rlwgb5g",
  fineMotor:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCeoZkBYzn93ZY5eHYUUVXZKScDqSl4PilFvk0YMZi7yu3lIqh9KXLHADwpsnMvceBYYu6UR2bZUrv9KQYVwNvnE92ZZpbHcJLKLCxB80CEA13jwP7A6sjZ0GT5LFUn9d7OrsX3MK6-1eKi69xngkuoLl7Wos_8Xva82ZTiFzWKb2696wF702noRassWo_iPwVmpbj-45zzcxcBBvWZUtJN0h7QSWmYY-VGxNoSADl7wzyN0wF6jajP7hmQsjvg7pULU-fceNNYYUc",
} as const;

export const siteImagePaths = {
  doctorPortrait: "/images/doctor/portrait.jpg",
  heroMain: "/images/hero/main.jpg",
  sensoryGym: "/images/therapy-rooms/sensory-gym.jpg",
  assessmentRoom: "/images/therapy-rooms/assessment-room.jpg",
  aquaticArea: "/images/therapy-rooms/aquatic-area.jpg",
  reception: "/images/clinic/reception.jpg",
  exterior: "/images/clinic/exterior.jpg",
  hallway: "/images/clinic/hallway.jpg",
  sensoryTools: "/images/equipment/sensory-tools.jpg",
  fineMotor: "/images/equipment/fine-motor.jpg",
} as const;

export type SiteImageKey = keyof typeof siteImagePaths;

export function getSiteImage(key: SiteImageKey): string {
  return useLocal ? siteImagePaths[key] : FALLBACKS[key];
}
