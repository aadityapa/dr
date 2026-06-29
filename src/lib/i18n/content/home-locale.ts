import { homeContent } from "@/lib/client-content/home";
import {
  expertiseClusters,
  expertiseEcosystemCopy,
} from "@/lib/client-content/expertise-clusters";

import type { LocaleContent } from "./types";

export function buildHomeLocaleContent(): LocaleContent["home"] {
  return {
    parentsReading: {
      kicker: homeContent.parentsReading.kicker,
      title: homeContent.parentsReading.title,
      paragraphs: [...homeContent.parentsReading.paragraphs],
    },
    aboutPreview: {
      kicker: homeContent.aboutPreview.kicker,
      title: homeContent.aboutPreview.title,
      bio: homeContent.aboutPreview.bio,
      cta: homeContent.aboutPreview.cta,
    },
    howICanHelp: {
      title: homeContent.howICanHelp.title,
      cards: homeContent.howICanHelp.cards.map((card) => ({ ...card })),
    },
    conditionsPreview: {
      kicker: homeContent.conditionsPreview.kicker,
      title: homeContent.conditionsPreview.title,
      description: homeContent.conditionsPreview.description,
      cta: homeContent.conditionsPreview.cta,
    },
    finalCta: {
      title: homeContent.finalCta.title,
      description: homeContent.finalCta.description,
      primary: homeContent.finalCta.primary,
      secondary: homeContent.finalCta.secondary,
    },
    expertiseEcosystem: {
      title: expertiseEcosystemCopy.title,
      subheading: expertiseEcosystemCopy.subheading,
      viewAll: "View All Expertise & Approaches",
      exploreApproach: "Explore this approach",
      clusters: Object.fromEntries(
        expertiseClusters.map((cluster) => [
          cluster.slug,
          { title: cluster.title, explanation: cluster.parentFriendlyExplanation },
        ]),
      ),
    },
  };
}

export const hiHomeContent: LocaleContent["home"] = {
  parentsReading: {
    kicker: "इसे पढ़ रहे माता-पिता के लिए…",
    title: "आप अपने बच्चे को सबसे अच्छी तरह जानते हैं",
    paragraphs: [
      "शायद आप छोटी-छोटी बातें देख रहे हैं — सुबह जो बिखर जाती है, होमवर्क जो हमेशा लंबा लगता है, बच्चा जो तेज़ लगता है लेकिन पीछे रह जाता है। शायद शिक्षक ने कुछ कहा। शायद आप बस अंतर्दृष्टि से महसूस करते हैं।",
      "संपर्क करने से पहले सभी जवाबों की ज़रूरत नहीं। पूर्ण निदान या स्पष्ट लेबल की ज़रूरत नहीं। अगर कुछ आपके बच्चे — या आपके — लिए जितना आसान होना चाहिए उससे कठिन लगता है, बातचीत शुरू करने के लिए यही काफी है।",
      "हम पहले सुनने के लिए यहाँ हैं। आपके बच्चे को वहीँ मिलने के लिए जहाँ वे हैं। और आपके परिवार के साथ, एक छोटे कदम में, चलने के लिए।",
    ],
  },
  aboutPreview: {
    kicker: "मेरे बारे में",
    title: "डॉ. शारुजा सराफ से मिलें",
    bio: "18 से अधिक वर्षों के अनुभव के साथ, डॉ. शारुजा सराफ एक PhD योग्य बाल चिकित्सा व्यावसायिक चिकित्सक और प्रमाणित Brain Gym® प्रशिक्षक हैं, जो कांदिवली, मुंबई में परिवारों की सेवा करती हैं। वे बच्चों और माता-पिता के साथ मिलकर रोज़मर्रा के कौशल बनाती हैं।",
    cta: "मेरे बारे में और जानें",
  },
  howICanHelp: {
    title: "मैं कैसे मदद कर सकती हूँ",
    cards: [
      {
        title: "हम जिन स्थितियों में सहायता करते हैं",
        text: "ASD, ADHD, सेरेब्रल पाल्सी, संवेदी प्रसंस्करण, सीखने की अक्षमता, और अधिक।",
        link: "और जानें →",
      },
      {
        title: "मेरी विशेषज्ञता",
        text: "Brain Gym®, संवेदी एकीकरण, जल चिकित्सा, Handwriting Without Tears®, और अधिक।",
        link: "और जानें →",
      },
      {
        title: "मेरे बारे में",
        text: "विविध ज़रूरतों वाले बच्चों और परिवारों का समर्थन करने का 18+ वर्षों का अनुभव।",
        link: "और जानें →",
      },
    ],
  },
  conditionsPreview: {
    kicker: "हम जिन स्थितियों में सहायता करते हैं",
    title: "हर बच्चे की कहानी अलग है",
    description:
      "चाहे ध्यान, संवेदी ज़रूरतें, मोटर कौशल, या विकास संबंधी चिंताएँ — हम आपको समझने में मदद करने के लिए यहाँ हैं कि सहायता कैसी दिख सकती है।",
    cta: "सभी स्थितियाँ देखें",
  },
  finalCta: {
    title: "जब आप तैयार हों",
    description:
      "परामर्श बुक करें या हमें संदेश भेजें। कोई दबाव नहीं — बस आपके बच्चे और आपकी चिंताओं पर एक गर्म बातचीत।",
    primary: "परामर्श बुक करें",
    secondary: "संपर्क करें",
  },
  expertiseEcosystem: {
    title: "विशेषज्ञता पारिस्थितिकी तंत्र",
    subheading:
      "हर बच्चा अनोखा है। हम साक्ष्य-आधारित दृष्टिकोणों का संयोजन करते हैं ताकि भागीदारी, आत्मविश्वास, स्वतंत्रता और रोज़मर्रा की सफलता बढ़े।",
    viewAll: "सभी विशेषज्ञता और दृष्टिकोण देखें",
    exploreApproach: "इस दृष्टिकोण को जानें",
    clusters: {
      "movement-motor-development": {
        title: "गति और मोटर विकास",
        explanation:
          "रेंगने और चढ़ने से लेकर मेज़ पर बैठने और खेल के मैदान में शामिल होने तक — हम बच्चों को वह ताकत, समन्वय और शरीर की जागरूकता बनाने में मदद करते हैं जो रोज़मर्रा की ज़िंदगी चुपचाप अपेक्षा करती है।",
      },
      "sensory-processing-regulation": {
        title: "संवेदी प्रसंस्करण और नियमन",
        explanation:
          "जब दुनिया बहुत तेज़, खुरदरी या बहुत अधिक लगे — हम आपके बच्चे की तंत्रिका तंत्र को शांति खोजने में मदद करते हैं।",
      },
      "feeding-oral-motor-skills": {
        title: "खाना और मौखिक मोटर कौशल",
        explanation:
          "चुनिंदा खाना, उबकाई, या खाने का समय लड़ाई — हम आपके बच्चे की गति पर, बिना ज़बरदस्ती, काम करते हैं।",
      },
      "handwriting-learning-readiness": {
        title: "लिखावट और सीखने की तैयारी",
        explanation:
          "जब लिखना दर्द करे या होमवर्क आँसुओं में खत्म हो — हम हाथ, आँख और ध्यान को एक साथ मज़बूत करते हैं।",
      },
      "aquatic-therapy": {
        title: "जल चिकित्सा",
        explanation:
          "पानी का सहारा गति, समन्वय और आत्मविश्वास बनाने में मदद करता है — खेल के साथ, दबाव के बिना।",
      },
      "reflex-integration": {
        title: "रिफ्लेक्स एकीकरण",
        explanation:
          "जब शरीर की आधारभूत प्रतिक्रियाएँ विकास को रोकें — कोमल, संरचित अभ्यास से हम मज़बूत नींव बनाते हैं।",
      },
    },
  },
};

export const mrHomeContent: LocaleContent["home"] = {
  parentsReading: {
    kicker: "हे वाचत असलेल्या पालकांसाठी…",
    title: "तुम्ही तुमच्या मुलाला सर्वात चांगले ओळखता",
    paragraphs: [
      "कदाचित तुम्ही लहान गोष्टी पाहत आहात — सकाळ जी विखुरते, गृहपाठ जो कधी संपत नाही, मूल जे हुशार वाटते पण मागे राहते. शिक्षकाने काहीतरी सांगितले असेल. किंवा तुम्हाला फक्त जाणवते.",
      "संपर्क करण्यापूर्वी सर्व उत्तरे असणे आवश्यक नाही. निदान किंवा स्पष्ट लेबल आवश्यक नाही. काहीतरी तुमच्या मुलासाठी — किंवा तुमच्यासाठी — जितके सोपे वाटावे तितके कठीण वाटते, तेवढे बोलणे सुरू करण्यासाठी पुरेसे आहे.",
      "आम्ही प्रथम ऐकण्यासाठी येथे आहोत. तुमच्या मुलाला जिथे आहे तिथे भेटण्यासाठी. आणि तुमच्या कुटुंबासोबत, एका लहान पाऊलाने, चालण्यासाठी.",
    ],
  },
  aboutPreview: {
    kicker: "माझ्याबद्दल",
    title: "डॉ. शरुजा सराफ यांची ओळख",
    bio: "१८ वर्षांहून अधिक अनुभवासह, डॉ. शरुजा सराफ ह्या PhD पात्र बाल वैद्यकीय व्यावसायिक थेरपिस्ट आणि प्रमाणित Brain Gym® प्रशिक्षक आहेत, ज्या कांदिवली, मुंबईतील कुटुंबांना सेवा देतात. त्या मुलांसोबत आणि पालकांसोबत रोजचे कौशल्य विकसित करतात.",
    cta: "माझ्याबद्दल अधिक जाणून घ्या",
  },
  howICanHelp: {
    title: "मी कशी मदत करू शकते",
    cards: [
      {
        title: "आम्ही ज्या स्थितींना साहाय्य करतो",
        text: "ASD, ADHD, सेरेब्रल पाल्सी, संवेदी प्रक्रिया, शिकण्याची अक्षमता, आणि अधिक.",
        link: "अधिक जाणून घ्या →",
      },
      {
        title: "माझी तज्ज्ञता",
        text: "Brain Gym®, संवेदी एकत्रीकरण, जल चिकित्सा, Handwriting Without Tears®, आणि अधिक.",
        link: "अधिक जाणून घ्या →",
      },
      {
        title: "माझ्याबद्दल",
        text: "विविध गरजा असलेल्या मुलांना आणि कुटुंबांना साहाय्य करण्याचा १८+ वर्षांचा अनुभव.",
        link: "अधिक जाणून घ्या →",
      },
    ],
  },
  conditionsPreview: {
    kicker: "आम्ही ज्या स्थितींना साहाय्य करतो",
    title: "प्रत्येक मुलाची कथा वेगळी आहे",
    description:
      "लक्ष, संवेदी गरजा, मोटर कौशल्ये, किंवा विकासाची चिंता — साहाय्य कशी दिसू शकते हे समजण्यासाठी आम्ही येथे आहोत.",
    cta: "सर्व स्थिती पहा",
  },
  finalCta: {
    title: "जेव्हा तुम्ही तयार असाल",
    description:
      "सल्ला बुक करा किंवा आम्हाला संदेश पाठवा. कोणताही दबाव नाही — फक्त तुमच्या मुलाबद्दल आणि तुमच्या चिंतांबद्दल उबदार संभाषण.",
    primary: "सल्ला बुक करा",
    secondary: "संपर्क करा",
  },
  expertiseEcosystem: {
    title: "तज्ज्ञता परिसंस्था",
    subheading:
      "प्रत्येक मूल अद्वितीय आहे. सहभाग, आत्मविश्वास, स्वातंत्र्य आणि रोजच्या यशासाठी आम्ही पुरावा-आधारित दृष्टिकोनांचे मिश्रण वापरतो.",
    viewAll: "सर्व तज्ज्ञता आणि दृष्टिकोन पहा",
    exploreApproach: "हा दृष्टिकोन जाणून घ्या",
    clusters: {
      "movement-motor-development": {
        title: "हालचाल आणि मोटर विकास",
        explanation:
          "रेंगाळणे आणि चढणे ते Desk वर बसणे आणि खेळाच्या मैदानात सहभाग — रोजच्या जीवनाला अपेक्षित असलेली ताकद, समन्वय आणि शरीर जागरूकता आम्ही मुलांना शिकवतो.",
      },
      "sensory-processing-regulation": {
        title: "संवेदी प्रक्रिया आणि नियमन",
        explanation:
          "जग खूप मोठे, खडबडीत किंवा जास्त वाटते तेव्हा — तुमच्या मुलाच्या चेतासंस्थेला शांतता शोधण्यास मदत करतो.",
      },
      "feeding-oral-motor-skills": {
        title: "खाणे आणि तोंडी मोटर कौशल्ये",
        explanation:
          "नivडक खाणे, gag, किंवा जेवणाचा वेळ लढाई — आम्ही तुमच्या मुलाच्या गतीने, जबरदस्तीशिवाय काम करतो.",
      },
      "handwriting-learning-readiness": {
        title: "हस्तलेखन आणि शिकण्याची तयारी",
        explanation:
          "लिहिताना वेदना किंवा गृहपाठ अश्रूंमध्ये संपतो — आम्ही हात, डोळे आणि लक्ष एकत्र मजबूत करतो.",
      },
      "aquatic-therapy": {
        title: "जल चिकित्सा",
        explanation:
          "पाण्याचा आधार हालचाल, समन्वय आणि आत्मविश्वास वाढवण्यास मदत करतो — खेळासह, दबावाशिवाय.",
      },
      "reflex-integration": {
        title: "रिफ्लेक्स एकत्रीकरण",
        explanation:
          "शरीराच्या मूलभूत प्रतिक्रिया विकासाला अडवतात तेव्हा — सौम्य, संरचित सरावाने मजबूत पाया तयार करतो.",
      },
    },
  },
};
