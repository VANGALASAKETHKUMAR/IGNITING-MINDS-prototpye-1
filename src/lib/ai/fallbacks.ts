import type {
  ClaimExplanation,
  DocumentExplanation,
  Language,
  StageExplanation,
} from "./types";

const claimFallbackEn: ClaimExplanation = {
  summary:
    "Your claim was rejected because the bank information does not match the verified information in this demo record.",
  whatItMeans:
    "The bank details submitted with your claim appear different from what is stored in this prototype's PF record.",
  likelyCause:
    "This can happen when account number or IFSC details were entered incorrectly, or an old bank account was used.",
  actionRequired: true,
  actions: [
    "Check the bank information shown in your claim.",
    "Correct any mismatch with your verified demo record.",
    "Review all details carefully.",
    "Resubmit the claim through this prototype.",
  ],
  urgency: "attention",
  whatNotToDo:
    "Do not submit another claim until the bank information is corrected.",
  nextStep: "Fix your bank details and resubmit this claim.",
};

const claimFallbackHi: ClaimExplanation = {
  summary:
    "आपका क्लेम अस्वीकार हो गया क्योंकि बैंक की जानकारी इस डेमो रिकॉर्ड में सत्यापित जानकारी से मेल नहीं खाती।",
  whatItMeans:
    "आपके क्लेम में दी गई बैंक जानकारी प्रोटोटाइप रिकॉर्ड में मौजूद जानकारी से अलग दिखती है।",
  likelyCause:
    "यह अक्सर गलत खाता नंबर या IFSC दर्ज करने, या पुराने बैंक खाते का उपयोग करने से हो सकता है।",
  actionRequired: true,
  actions: [
    "अपने क्लेम में दिखाई गई बैंक जानकारी जांचें।",
    "डेमो रिकॉर्ड से मेल खाने के लिए सुधार करें।",
    "सभी विवरण ध्यान से देखें।",
    "इस प्रोटोटाइप में क्लेम दोबारा जमा करें।",
  ],
  urgency: "attention",
  whatNotToDo:
    "बैंक जानकारी सुधारने से पहले दूसरा क्लेम जमा न करें।",
  nextStep: "अपनी बैंक जानकारी सुधारें और क्लेम दोबारा जमा करें।",
};

const claimFallbackTe: ClaimExplanation = {
  summary:
    "మీ క్లెయిమ్‌లో ఉన్న బ్యాంక్ వివరాలు ఈ డెమో రికార్డులో ఉన్న వివరాలతో సరిపోలడం లేదు, అందుకే క్లెయిమ్ తిరస్కరించబడింది.",
  whatItMeans:
    "మీ క్లెయిమ్‌లో సమర్పించిన బ్యాంక్ వివరాలు ఈ ప్రోటోటైప్ రికార్డులో ఉన్న వివరాలకు భిన్నంగా కనిపిస్తున్నాయి.",
  likelyCause:
    "ఖాతా నంబర్ లేదా IFSC తప్పుగా నమోదు చేసినప్పుడు లేదా పాత బ్యాంక్ ఖాతా ఉపయోగించినప్పుడు ఇలా జరగవచ్చు.",
  actionRequired: true,
  actions: [
    "మీ క్లెయిమ్‌లో చూపిన బ్యాంక్ వివరాలను తనిఖీ చేయండి.",
    "డెమో రికార్డుతో సరిపోలేలా సవరించండి.",
    "అన్ని వివరాలను జాగ్రత్తగా సమీక్షించండి.",
    "ఈ ప్రోటోటైప్‌లో క్లెయిమ్ మళ్లీ సమర్పించండి.",
  ],
  urgency: "attention",
  whatNotToDo:
    "బ్యాంక్ వివరాలు సరిచేసే వరకు మరొక క్లెయిమ్ సమర్పించకండి.",
  nextStep: "మీ బ్యాంక్ వివరాలను సరిచేసి క్లెయిమ్ మళ్లీ సమర్పించండి.",
};

export function getClaimFallback(language: Language): ClaimExplanation {
  if (language === "hi") return claimFallbackHi;
  if (language === "te") return claimFallbackTe;
  return claimFallbackEn;
}

export function getStageFallback(language: Language): StageExplanation {
  if (language === "hi") {
    return {
      summary:
        "आपका सुधारित क्लेम इस प्रोटोटाइप में प्रसंस्करण चरण में दिखाया गया है।",
      whatItMeans:
        "डेमो जानकारी के अनुसार, अभी कोई अतिरिक्त कार्रवाई आवश्यक नहीं है।",
      nextAction: "प्रसंस्करण पूरा होने के बाद क्लेम स्थिति दोबारा जांचें।",
      actionRequired: false,
    };
  }

  if (language === "te") {
    return {
      summary:
        "మీ సవరించిన క్లెయిమ్ ఈ ప్రోటోటైప్‌లో ప్రాసెసింగ్ దశలో ఉంది.",
      whatItMeans:
        "డెమో సమాచారం ప్రకారం, ఇప్పుడు అదనపు చర్య అవసరం లేదు.",
      nextAction: "ప్రాసెసింగ్ పూర్తి తర్వాత క్లెయిమ్ స్థితిని మళ్లీ తనిఖీ చేయండి.",
      actionRequired: false,
    };
  }

  return {
    summary:
      "Your corrected claim is currently shown as being processed in this prototype.",
    whatItMeans:
      "Based on the available demo information, no additional action is required at this stage.",
    nextAction: "Check the claim status again after processing.",
    actionRequired: false,
  };
}

export function getDocumentFallback(language: Language): DocumentExplanation {
  if (language === "hi") {
    return {
      issuesFound: 1,
      issueTitle: "बैंक/KYC असमानता",
      simpleExplanation:
        "नोटिस में बैंक जानकारी डेमो रिकॉर्ड में उपलब्ध जानकारी से मेल नहीं खाती।",
      actions: [
        "बैंक जानकारी जांचें",
        "असमानता सुधारें",
        "विवरण समीक्षा करें",
        "क्लेम दोबारा जमा करें",
      ],
    };
  }

  if (language === "te") {
    return {
      issuesFound: 1,
      issueTitle: "బ్యాంక్/KYC అసమానత",
      simpleExplanation:
        "నోటీసులో బ్యాంక్ సమాచారం డెమో రికార్డులో ఉన్న సమాచారంతో సరిపోలడం లేదు.",
      actions: [
        "బ్యాంక్ సమాచారం తనిఖీ చేయండి",
        "అసమానత సరిచేయండి",
        "వివరాలను సమీక్షించండి",
        "క్లెయిమ్ మళ్లీ సమర్పించండి",
      ],
    };
  }

  return {
    issuesFound: 1,
    issueTitle: "Bank/KYC mismatch",
    simpleExplanation:
      "The bank information in the notice does not match the information available in the demo record.",
    actions: [
      "Check bank information",
      "Correct mismatch",
      "Review details",
      "Resubmit claim",
    ],
  };
}
