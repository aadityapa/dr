import type { Locale } from "../types";

export type LegalSection = {
  heading: string;
  body?: string[];
  list?: string[];
};

export type LegalPageCopy = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  description: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export type LegalContent = {
  privacy: LegalPageCopy;
  terms: LegalPageCopy;
  disclaimer: LegalPageCopy;
  accessibility: LegalPageCopy;
};

const enLegal: LegalContent = {
  privacy: {
    metaTitle: "Privacy Policy",
    metaDescription:
      "How Thrive With Sharuja collects, uses, and protects the personal information you share through our website and enquiry forms.",
    kicker: "Your Privacy",
    title: "Privacy Policy",
    description: "We are committed to protecting the privacy of the families who reach out to us.",
    lastUpdated: "June 2026",
    intro:
      'This Privacy Policy explains how Thrive With Sharuja ("we", "us", "our") collects, uses, and safeguards the information you provide when you use our website or contact us. This is a placeholder template that should be reviewed by the clinic owner and, where appropriate, a legal professional before publication.',
    sections: [
      {
        heading: "Information we collect",
        body: [
          "When you submit an enquiry, appointment request, sensory screening, or call-back form, we collect the details you choose to share with us.",
        ],
        list: [
          "Contact details such as your name, your child's first name or age, phone number, and email address",
          "The message or concern you describe in the form",
          "Basic, non-identifying analytics about how the website is used (for example, pages visited)",
        ],
      },
      {
        heading: "How we use your information",
        list: [
          "To respond to your enquiry and schedule consultations or therapy sessions",
          "To provide information about our services that you have requested",
          "To improve the quality and relevance of our website and services",
          "To send you parent resources or updates only if you have opted in (for example, via newsletter signup)",
        ],
      },
      {
        heading: "How we store and protect your information",
        body: [
          "Enquiry submissions are transmitted securely over HTTPS. We retain personal information only for as long as necessary to respond to your request and provide ongoing care, after which it is securely deleted or anonymised.",
          "We do not sell, rent, or trade your personal information to third parties.",
        ],
      },
      {
        heading: "Third-party services",
        body: [
          "We use trusted service providers to operate our website and communications (for example, our hosting provider and email delivery service). These providers process data only on our behalf and under appropriate safeguards.",
        ],
      },
      {
        heading: "Children's privacy",
        body: [
          "Because we serve families of young children, any information about a child is provided by a parent or legal guardian. We only collect the minimum information needed to provide care and never knowingly collect information directly from a child.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You may request access to, correction of, or deletion of the personal information we hold about you at any time.",
        ],
      },
      {
        heading: "Contact us",
        body: [
          "If you have any questions about this Privacy Policy or how your information is handled, please contact us at drsharujasarap@gmail.com or 9820525197.",
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Terms of Service",
    metaDescription:
      "Terms governing use of the Thrive With Sharuja website and online enquiry services for pediatric occupational therapy in Mumbai.",
    kicker: "Terms",
    title: "Terms of Service",
    description: "Please read these terms before using our website or submitting an enquiry.",
    lastUpdated: "June 2026",
    intro:
      "These Terms of Service govern your use of the Thrive With Sharuja website and online enquiry forms. By using this website, you agree to these terms. This is a placeholder template that should be reviewed by the clinic owner and, where appropriate, a legal professional before publication.",
    sections: [
      {
        heading: "Use of this website",
        body: [
          "This website provides general information about pediatric occupational therapy services offered by Dr. Sharuja Sarap in Kandivali West, Mumbai. Content is for educational purposes and does not replace professional assessment or treatment.",
        ],
      },
      {
        heading: "Enquiries and appointments",
        body: [
          "Submitting a form does not guarantee an appointment. We will respond as soon as possible during clinic hours (Monday–Saturday, 9 AM – 5 PM).",
        ],
      },
      {
        heading: "Accuracy of information",
        body: [
          "We strive to keep information accurate and up to date. However, service details, hours, and availability may change. Please contact us directly to confirm before visiting.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "All content on this website — text, images, logos, and design — is owned by Thrive With Sharuja unless otherwise stated. You may not reproduce content without written permission.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "We are not liable for any direct or indirect damages arising from use of this website or reliance on its content. Always seek professional advice for your child's specific needs.",
        ],
      },
      {
        heading: "Changes to these terms",
        body: [
          "We may update these terms from time to time. Continued use of the website after changes constitutes acceptance of the updated terms.",
        ],
      },
      {
        heading: "Contact",
        body: ["For questions about these terms, contact us at drsharujasarap@gmail.com or 9820525197."],
      },
    ],
  },
  disclaimer: {
    metaTitle: "Medical Disclaimer",
    metaDescription:
      "Medical disclaimer for Thrive With Sharuja — educational content only, not a substitute for professional pediatric assessment or treatment.",
    kicker: "Important",
    title: "Medical Disclaimer",
    description: "Please read this disclaimer before relying on information from our website.",
    lastUpdated: "June 2026",
    intro:
      "The content on this website is provided for general educational and informational purposes only. It is not intended as medical advice, diagnosis, or treatment.",
    sections: [
      {
        heading: "Not a substitute for professional care",
        body: [
          "Information on this website does not replace consultation with a qualified pediatric occupational therapist, paediatrician, or other healthcare professional. Always seek professional advice for your child's specific situation.",
        ],
      },
      {
        heading: "No doctor-patient relationship",
        body: [
          "Using this website or submitting an enquiry form does not create a doctor-patient or therapist-client relationship. A relationship is established only after a formal consultation and agreement to services.",
        ],
      },
      {
        heading: "Individual outcomes vary",
        body: [
          "Testimonials, case examples, and outcome descriptions reflect individual experiences. Results vary based on each child's profile, consistency of therapy, and family support. We do not guarantee specific outcomes.",
        ],
      },
      {
        heading: "Screening tools",
        body: [
          "Online screening questionnaires on this website are not diagnostic tools. They help us understand your concerns and recommend appropriate next steps — not provide a diagnosis.",
        ],
      },
      {
        heading: "Emergency situations",
        body: [
          "This website is not for medical emergencies. If your child is in immediate danger, call emergency services (112 in India) or visit the nearest hospital.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "For clinical questions, book a consultation with Dr. Sharuja Sarap at our Kandivali West clinic or call 9820525197.",
        ],
      },
    ],
  },
  accessibility: {
    metaTitle: "Accessibility Statement",
    metaDescription:
      "Accessibility commitment for the Thrive With Sharuja website — our efforts to make pediatric OT information available to all families.",
    kicker: "Accessibility",
    title: "Accessibility Statement",
    description: "We want every parent to access the information and support they need.",
    lastUpdated: "June 2026",
    intro:
      "Thrive With Sharuja is committed to making our website accessible to families of all abilities. We continuously work to improve the user experience for everyone.",
    sections: [
      {
        heading: "Our commitment",
        body: [
          "We aim to conform to WCAG 2.1 Level AA guidelines where practicable. This includes readable text, sufficient colour contrast, keyboard navigation, and descriptive alt text for images.",
        ],
      },
      {
        heading: "Features we provide",
        list: [
          "Skip-to-content link for screen reader users",
          "Semantic HTML structure for navigation",
          "Alt text on meaningful images",
          "Responsive design for mobile and tablet users",
          "Clear heading hierarchy on all pages",
        ],
      },
      {
        heading: "Known limitations",
        body: [
          "Some third-party embeds (for example, maps or review widgets) may not fully meet accessibility standards. We are working to address these where possible.",
        ],
      },
      {
        heading: "Feedback and assistance",
        body: [
          "If you encounter accessibility barriers on our website, please contact us at drsharujasarap@gmail.com or 9820525197. We will do our best to provide information in an alternative format.",
        ],
      },
      {
        heading: "In-clinic accessibility",
        body: [
          "Our Kandivali West clinic welcomes families with diverse needs. Please let us know in advance if your child requires specific accommodations for their visit.",
        ],
      },
    ],
  },
};

const hiLegal: LegalContent = {
  privacy: {
    metaTitle: "गोपनीयता नीति",
    metaDescription:
      "थ्राइव विथ शारुजा आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और सुरक्षित करती है — वेबसाइट और फ़ॉर्म के माध्यम से।",
    kicker: "आपकी गोपनीयता",
    title: "गोपनीयता नीति",
    description: "हम उन परिवारों की गोपनीयता की रक्षा करने के लिए प्रतिबद्ध हैं जो हमसे संपर्क करते हैं।",
    lastUpdated: "जून 2026",
    intro:
      'यह गोपनीयता नीति बताती है कि थ्राइव विथ शारुजा ("हम") आपकी जानकारी कैसे एकत्र, उपयोग और सुरक्षित करती है जब आप हमारी वेबसाइट का उपयोग करते हैं या हमसे संपर्क करते हैं। प्रकाशन से पहले क्लिनिक मालिक और यथोचित कानूनी पेशेवर द्वारा समीक्षा की जानी चाहिए।',
    sections: [
      {
        heading: "हम कौन सी जानकारी एकत्र करते हैं",
        body: ["जब आप पूछताछ, अपॉइंटमेंट, स्क्रीनिंग या कॉल-बैक फ़ॉर्म भेजते हैं, तो हम वे विवरण एकत्र करते हैं जो आप साझा करते हैं।"],
        list: [
          "संपर्क विवरण — आपका नाम, बच्चे का नाम या उम्र, फ़ोन और ईमेल",
          "फ़ॉर्म में आपकी चिंता या संदेश",
          "वेबसाइट उपयोग के बारे में बुनियादी, गैर-पहचान वाले आँकड़े",
        ],
      },
      {
        heading: "हम आपकी जानकारी का उपयोग कैसे करते हैं",
        list: [
          "आपकी पूछताछ का जवाब देने और परामर्श या थेरेपी शेड्यूल करने के लिए",
          "आपके द्वारा अनुरोधित सेवाओं की जानकारी देने के लिए",
          "वेबसाइट और सेवाओं की गुणवत्ता सुधारने के लिए",
          "केवल आपकी सहमति पर — न्यूज़लेटर जैसे अपडेट भेजने के लिए",
        ],
      },
      {
        heading: "जानकारी का भंडारण और सुरक्षा",
        body: [
          "पूछताछ HTTPS के माध्यम से सुरक्षित रूप से भेजी जाती है। हम व्यक्तिगत जानकारी केवल आवश्यक अवधि तक रखते हैं, फिर सुरक्षित रूप से हटाते या अज्ञात करते हैं।",
          "हम आपकी व्यक्तिगत जानकारी तीसरे पक्ष को नहीं बेचते, किराए पर नहीं देते या व्यापार नहीं करते।",
        ],
      },
      {
        heading: "तृतीय-पक्ष सेवाएँ",
        body: ["हम वेबसाइट और संचार के लिए विश्वसनीय सेवा प्रदाताओं का उपयोग करते हैं जो केवल हमारी ओर से और उचित सुरक्षा के तहत डेटा संसाधित करते हैं।"],
      },
      {
        heading: "बच्चों की गोपनीयता",
        body: [
          "हम छोटे बच्चों के परिवारों की सेवा करते हैं; बच्चे की कोई भी जानकारी माता-पिता या कानूनी अभिभावक द्वारा दी जाती है। हम केवल आवश्यक न्यूनतम जानकारी एकत्र करते हैं।",
        ],
      },
      {
        heading: "आपके अधिकार",
        body: ["आप किसी भी समय अपनी व्यक्तिगत जानकारी तक पहुँच, सुधार या हटाने का अनुरोध कर सकते हैं।"],
      },
      {
        heading: "संपर्क करें",
        body: ["गोपनीयता से संबंधित प्रश्नों के लिए drsharujasarap@gmail.com या 9820525197 पर संपर्क करें।"],
      },
    ],
  },
  terms: {
    metaTitle: "सेवा की शर्तें",
    metaDescription: "थ्राइव विथ शारुजा वेबसाइट और ऑनलाइन पूछताछ सेवाओं की शर्तें।",
    kicker: "शर्तें",
    title: "सेवा की शर्तें",
    description: "हमारी वेबसाइट का उपयोग करने या पूछताछ भेजने से पहले कृपया इन शर्तों को पढ़ें।",
    lastUpdated: "जून 2026",
    intro:
      "ये सेवा की शर्तें थ्राइव विथ शारुजा वेबसाइट और ऑनलाइन फ़ॉर्म के उपयोग को नियंत्रित करती हैं। वेबसाइट का उपयोग करके, आप इन शर्तों से सहमत होते हैं।",
    sections: [
      {
        heading: "वेबसाइट का उपयोग",
        body: ["यह वेबसाइट कांदिवली में डॉ. शारुजा सराफ द्वारा दी जाने वाली बाल चिकित्सा व्यावसायिक चिकित्सा सेवाओं की सामान्य जानकारी प्रदान करती है।"],
      },
      {
        heading: "पूछताछ और अपॉइंटमेंट",
        body: ["फ़ॉर्म भेजने से अपॉइंटमेंट की गारंटी नहीं होती। हम क्लिनिक घंटों (सोम–शनि, 9–5) के दौरान जल्द जवाब देंगे।"],
      },
      {
        heading: "जानकारी की सटीकता",
        body: ["हम जानकारी सटीक रखने का प्रयास करते हैं। सेवा विवरण बदल सकते हैं — आने से पहले सीधे संपर्क करके पुष्टि करें।"],
      },
      {
        heading: "बौद्धिक संपदा",
        body: ["वेबसाइट की सभी सामग्री थ्राइव विथ शारुजा की है। लिखित अनुमति के बिना पुनःप्रस्तुत न करें।"],
      },
      {
        heading: "दायित्व की सीमा",
        body: ["वेबसाइट उपयोग से उत्पन्न क्षति के लिए हम उत्तरदायी नहीं हैं। अपने बच्चे की विशिष्ट जरूरतों के लिए हमेशा पेशेवर सलाह लें।"],
      },
      {
        heading: "शर्तों में बदलाव",
        body: ["हम समय-समय पर शर्तें अपडेट कर सकते हैं। बदलाव के बाद उपयोग अपडेटेड शर्तों की स्वीकृति है।"],
      },
      {
        heading: "संपर्क",
        body: ["शर्तों के बारे में drsharujasarap@gmail.com या 9820525197 पर संपर्क करें।"],
      },
    ],
  },
  disclaimer: {
    metaTitle: "चिकित्सा अस्वीकरण",
    metaDescription: "थ्राइव विथ शारुजा चिकित्सा अस्वीकरण — शैक्षिक सामग्री, पेशेवर मूल्यांकन का विकल्प नहीं।",
    kicker: "महत्वपूर्ण",
    title: "चिकित्सा अस्वीकरण",
    description: "हमारी वेबसाइट की जानकारी पर भरोसा करने से पहले कृपया यह अस्वीकरण पढ़ें।",
    lastUpdated: "जून 2026",
    intro: "इस वेबसाइट की सामग्री केवल सामान्य शैक्षिक और सूचनात्मक उद्देश्यों के लिए है। यह चिकित्सा सलाह, निदान या उपचार नहीं है।",
    sections: [
      {
        heading: "पेशेवर देखभाल का विकल्प नहीं",
        body: ["वेबसाइट की जानकारी योग्य बाल चिकित्सा व्यावसायिक चिकित्सक या अन्य स्वास्थ्य पेशेवर की सलाह का स्थान नहीं लेती।"],
      },
      {
        heading: "कोई डॉक्टर-रोगी संबंध नहीं",
        body: ["वेबसाइट उपयोग या फ़ॉर्म भेजने से चिकित्सक-ग्राहक संबंध नहीं बनता। यह औपचारिक परामर्श के बाद स्थापित होता है।"],
      },
      {
        heading: "व्यक्तिगत परिणाम अलग होते हैं",
        body: ["प्रशंसापत्र और उदाहरण व्यक्तिगत अनुभव दर्शाते हैं। हम विशिष्ट परिणाम की गारंटी नहीं देते।"],
      },
      {
        heading: "स्क्रीनिंग उपकरण",
        body: ["ऑनलाइन स्क्रीनिंग निदान उपकरण नहीं हैं — वे आपकी चिंताओं को समझने और अगले कदम सुझाने में मदद करते हैं।"],
      },
      {
        heading: "आपात स्थिति",
        body: ["यह वेबसाइट चिकित्सा आपात के लिए नहीं है। तत्काल खतरे में 112 पर कॉल करें या नज़दीकी अस्पताल जाएँ।"],
      },
      {
        heading: "संपर्क",
        body: ["नैदानिक प्रश्नों के लिए कांदिवली क्लिनिक में परामर्श बुक करें या 9820525197 पर कॉल करें।"],
      },
    ],
  },
  accessibility: {
    metaTitle: "पहुँच-योग्यता विवरण",
    metaDescription: "थ्राइव विथ शारुजा वेबसाइट की पहुँच-योग्यता प्रतिबद्धता — सभी परिवारों के लिए जानकारी उपलब्ध।",
    kicker: "पहुँच-योग्यता",
    title: "पहुँच-योग्यता विवरण",
    description: "हम चाहते हैं कि हर माता-पिता को ज़रूरी जानकारी और सहायता मिले।",
    lastUpdated: "जून 2026",
    intro: "थ्राइव विथ शारुजा अपनी वेबसाइट को सभी क्षमताओं वाले परिवारों के लिए सुलभ बनाने के लिए प्रतिबद्ध है।",
    sections: [
      {
        heading: "हमारी प्रतिबद्धता",
        body: ["हम जहाँ संभव हो WCAG 2.1 Level AA दिशानिर्देशों का पालन करने का प्रयास करते हैं।"],
      },
      {
        heading: "हम जो सुविधाएँ देते हैं",
        list: [
          "स्क्रीन रीडर उपयोगकर्ताओं के लिए सामग्री पर जाएँ लिंक",
          "नेविगेशन के लिए सिमेंटिक HTML",
          "महत्वपूर्ण छवियों पर alt टेक्स्ट",
          "मोबाइल और टैबलेट के लिए रेस्पॉन्सिव डिज़ाइन",
          "सभी पृष्ठों पर स्पष्ट शीर्षक क्रम",
        ],
      },
      {
        heading: "ज्ञात सीमाएँ",
        body: ["कुछ तृतीय-पक्ष एम्बेड (जैसे मानचित्र) पूर्ण पहुँच मानकों को पूरा नहीं कर सकते।"],
      },
      {
        heading: "प्रतिक्रिया और सहायता",
        body: ["पहुँच बाधाओं के लिए drsharujasarap@gmail.com या 9820525197 पर संपर्क करें। वैकल्पिक प्रारूप में जानकारी देने का प्रयास करेंगे।"],
      },
      {
        heading: "क्लिनिक में पहुँच",
        body: ["हमारा कांदिवली क्लिनिक विविध जरूरतों वाले परिवारों का स्वागत करता है। यदि आपके बच्चे को विशेष सुविधा चाहिए, पहले से बताएँ।"],
      },
    ],
  },
};

const mrLegal: LegalContent = {
  privacy: {
    metaTitle: "गोपनीयता धोरण",
    metaDescription: "थ्राइव विथ शारुजा तुमची वैयक्तिक माहिती कशी गोळा, वापर आणि संरक्षित करते.",
    kicker: "तुमची गोपनीयता",
    title: "गोपनीयता धोरण",
    description: "आम्हाला संपर्क साधणाऱ्या कुटुंबांची गोपनीयता संरक्षित करण्यासाठी आम्ही वचनबद्ध आहोत.",
    lastUpdated: "जून 2026",
    intro:
      'हे गोपनीयता धोरण स्पष्ट करते की थ्राइव विथ शारुजा ("आम्ही") तुमची माहिती कशी गोळा, वापर आणि संरक्षित करते. प्रकाशनापूर्वी क्लिनिक मालक आणि कायदेशीर तज्ज्ञाने पुनरावलोकन करावे.',
    sections: [
      {
        heading: "आम्ही कोणती माहिती गोळा करतो",
        body: ["जेव्हा तुम्ही चौकशी, अपॉइंटमेंट, स्क्रीनिंग किंवा कॉल-बॅक फॉर्म सबमिट करता, तेव्हा तुम्ही सामायिक केलेली तपशील आम्ही गोळा करतो."],
        list: [
          "संपर्क तपशील — तुमचे नाव, मुलाचे नाव किंवा वय, फोन आणि ईमेल",
          "फॉर्ममधील तुमची चिंता किंवा संदेश",
          "वेबसाइट वापराबद्दल मूलभूत, अनामिक आकडेवारी",
        ],
      },
      {
        heading: "आम्ही तुमची माहिती कशी वापरतो",
        list: [
          "तुमच्या चौकशीला उत्तर देण्यासाठी आणि सल्ला किंवा थेरपी शेड्यूल करण्यासाठी",
          "तुम्ही विनंती केलेल्या सेवांची माहिती देण्यासाठी",
          "वेबसाइट आणि सेवांची गुणवत्ता सुधारण्यासाठी",
          "फक्त तुमच्या संमतीने — न्यूजलेटर अपडेट पाठवण्यासाठी",
        ],
      },
      {
        heading: "माहितीचे साठवण आणि संरक्षण",
        body: [
          "चौकशी HTTPS द्वारे सुरक्षितपणे पाठवली जाते. आम्ही वैयक्तिक माहिती फक्त आवश्यक काळासाठी ठेवतो, नंतर सुरक्षितपणे हटवतो किंवा अनामिक करतो.",
          "आम्ही तुमची वैयक्तिक माहिती तृतीय पक्षाला विकत, भाड्याने देत किंवा व्यापार करत नाही.",
        ],
      },
      {
        heading: "तृतीय-पक्ष सेवा",
        body: ["वेबसाइट आणि संप्रेषणासाठी आम्ही विश्वासार्ह सेवा प्रदाते वापरतो जे फक्त आमच्या वतीने आणि योग्य सुरक्षेसह डेटा प्रक्रिया करतात."],
      },
      {
        heading: "मुलांची गोपनीयता",
        body: ["लहान मुलांच्या कुटुंबांची सेवा करताना, मुलाची कोणतीही माहिती पालक किंवा कायदेशीर पालक देतात. आम्ही फक्त आवश्यक किमान माहिती गोळा करतो."],
      },
      {
        heading: "तुमचे अधिकार",
        body: ["तुम्ही कोणत्याही वेळी तुमच्या वैयक्तिक माहितीचा प्रवेश, दुरुस्ती किंवा हटवण्याची विनंती करू शकता."],
      },
      {
        heading: "संपर्क",
        body: ["गोपनीयतेशी संबंधित प्रश्नांसाठी drsharujasarap@gmail.com किंवा 9820525197 वर संपर्क करा."],
      },
    ],
  },
  terms: {
    metaTitle: "सेवा अटी",
    metaDescription: "थ्राइव विथ शारुजा वेबसाइट आणि ऑनलाइन चौकशी सेवांच्या अटी.",
    kicker: "अटी",
    title: "सेवा अटी",
    description: "आमची वेबसाइट वापरण्यापूर्वी किंवा चौकशी पाठवण्यापूर्वी कृपया या अटी वाचा.",
    lastUpdated: "जून 2026",
    intro: "या सेवा अटी थ्राइव विथ शारुजा वेबसाइट आणि ऑनलाइन फॉर्मच्या वापरावर लागू होतात. वेबसाइट वापरून, तुम्ही या अटींना सहमती देता.",
    sections: [
      { heading: "वेबसाइटचा वापर", body: ["ही वेबसाइट कांदिवलीतील डॉ. शारुजा सराफ यांच्या बाल व्यावसायिक चिकित्सा सेवांची सामान्य माहिती देते."] },
      { heading: "चौकशी आणि अपॉइंटमेंट", body: ["फॉर्म सबमिट केल्याने अपॉइंटमेंटची हमी नाही. क्लिनिक वेळेत (सोम–शनि, 9–5) लवकर उत्तर देऊ."] },
      { heading: "माहितीची अचूकता", body: ["माहिती अचूक ठेवण्याचा प्रयत्न करतो. सेवा तपशील बदलू शकतात — येण्यापूर्वी थेट संपर्क करून पुष्टी करा."] },
      { heading: "बौद्धिक मालमत्ता", body: ["वेबसाइटवरील सर्व सामग्री थ्राइव विथ शारुजाची आहे. लिखित परवानगीशिवाय पुनर्प्रकाशित करू नका."] },
      { heading: "दायित्वाची मर्यादा", body: ["वेबसाइट वापरामुळे होणाऱ्या नुकसानासाठी आम्ही जबाबदार नाही. तुमच्या मुलाच्या विशिष्ट गरजांसाठी नेहमी व्यावसायिक सल्ला घ्या."] },
      { heading: "अटींमध्ये बदल", body: ["आम्ही वेळोवेळी अटी अपडेट करू शकतो. बदलानंतर वापर म्हणजे अपडेटेड अटींची स्वीकृती."] },
      { heading: "संपर्क", body: ["अटींबद्दल drsharujasarap@gmail.com किंवा 9820525197 वर संपर्क करा."] },
    ],
  },
  disclaimer: {
    metaTitle: "वैद्यकीय अस्वीकरण",
    metaDescription: "थ्राइव विथ शारुजा वैद्यकीय अस्वीकरण — शैक्षणिक सामग्री, व्यावसायिक मूल्यांकनाचा पर्याय नाही.",
    kicker: "महत्वाचे",
    title: "वैद्यकीय अस्वीकरण",
    description: "आमच्या वेबसाइटवरील माहितीवर विश्वास ठेवण्यापूर्वी कृपया हे अस्वीकरण वाचा.",
    lastUpdated: "जून 2026",
    intro: "या वेबसाइटवरील सामग्री फक्त सामान्य शैक्षणिक आणि माहिती उद्देशांसाठी आहे. हे वैद्यकीय सल्ला, निदान किंवा उपचार नाही.",
    sections: [
      { heading: "व्यावसायिक काळजीचा पर्याय नाही", body: ["वेबसाइटवरील माहिती पात्र बाल व्यावसायिक चिकित्सक किंवा इतर आरोग्य व्यावसायिकाच्या सल्ल्याची जागा घेत नाही."] },
      { heading: "डॉक्टर-रुग्ण नाते नाही", body: ["वेबसाइट वापर किंवा फॉर्म सबमिशनमुळे चिकित्सक-ग्राहक नाते तयार होत नाही."] },
      { heading: "वैयक्तिक परिणाम वेगळे", body: ["प्रशंसापत्रे आणि उदाहरणे वैयक्तिक अनुभव दर्शवतात. आम्ही विशिष्ट परिणामाची हमी देत नाही."] },
      { heading: "स्क्रीनिंग साधने", body: ["ऑनलाइन स्क्रीनिंग निदान साधने नाहीत — तुमच्या चिंता समजण्यास आणि पुढचे पाऊल सुचवण्यास मदत करतात."] },
      { heading: "आपत्कालीन परिस्थिती", body: ["ही वेबसाइट वैद्यकीय आपत्कालीनसाठी नाही. तातडीच्या धोक्यात 112 वर कॉल करा किंवा जवळच्या रुग्णालयात जा."] },
      { heading: "संपर्क", body: ["वैद्यकीय प्रश्नांसाठी कांदिवली क्लिनिकमध्ये सल्ला बुक करा किंवा 9820525197 वर कॉल करा."] },
    ],
  },
  accessibility: {
    metaTitle: "प्रवेशयोग्यता विधान",
    metaDescription: "थ्राइव विथ शारुजा वेबसाइटची प्रवेशयोग्यता प्रतिबद्धता.",
    kicker: "प्रवेशयोग्यता",
    title: "प्रवेशयोग्यता विधान",
    description: "प्रत्येक पालकाला आवश्यक माहिती आणि साहाय्य मिळावे हे आमचे ध्येय.",
    lastUpdated: "जून 2026",
    intro: "थ्राइव विथ शारुजा सर्व क्षमतांच्या कुटुंबांसाठी वेबसाइट सुलभ करण्यासाठी वचनबद्ध आहे.",
    sections: [
      { heading: "आमची प्रतिबद्धता", body: ["शक्य तिथे WCAG 2.1 Level AA मार्गदर्शक तत्त्वांचे पालन करण्याचा प्रयत्न करतो."] },
      {
        heading: "आम्ही देत असलेली सुविधा",
        list: [
          "स्क्रीन रीडर वापरकर्त्यांसाठी सामग्रीवर जा लिंक",
          "नेव्हिगेशनसाठी सिमॅंटिक HTML",
          "महत्वाच्या प्रतिमांवर alt मजकूर",
          "मोबाइल आणि टॅबलेटसाठी रेस्पॉन्सिव्ह डिझाइन",
          "सर्व पृष्ठांवर स्पष्ट शीर्षक क्रम",
        ],
      },
      { heading: "ज्ञात मर्यादा", body: ["काही तृतीय-पक्ष एम्बेड (जसे नकाशे) पूर्ण प्रवेश मानके पूर्ण करू शकत नाहीत."] },
      { heading: "अभिप्राय आणि साहाय्य", body: ["प्रवेश अडथळ्यांसाठी drsharujasarap@gmail.com किंवा 9820525197 वर संपर्क करा."] },
      { heading: "क्लिनिकमध्ये प्रवेश", body: ["आमचे कांदिवली क्लिनिक विविध गरजा असलेल्या कुटुंबांचे स्वागत करते. विशेष सोयी लागल्यास आधी कळवा."] },
    ],
  },
};

const byLocale: Record<Locale, LegalContent> = { en: enLegal, hi: hiLegal, mr: mrLegal };

export function getLegalContent(locale: Locale): LegalContent {
  return byLocale[locale] ?? enLegal;
}
