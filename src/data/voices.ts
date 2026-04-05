export interface Voice {
  id: string;
  name: string;
  style: string;
}

export interface LanguageGroup {
  language: string;
  code: string;
  voices: Voice[];
}

export const languages: LanguageGroup[] = [
  {
    language: "English",
    code: "en",
    voices: [
      { id: "en-jenny", name: "JennyNeural", style: "Friendly, warm" },
      { id: "en-guy", name: "GuyNeural", style: "Professional, calm" },
      { id: "en-aria", name: "AriaNeural", style: "Expressive, natural" },
      { id: "en-davis", name: "DavisNeural", style: "Authoritative, clear" },
      { id: "en-jane", name: "JaneNeural", style: "Conversational, bright" },
    ],
  },
  {
    language: "Spanish",
    code: "es",
    voices: [
      { id: "es-elvira", name: "ElviraNeural", style: "Warm, articulate" },
      { id: "es-alvaro", name: "AlvaroNeural", style: "Deep, professional" },
      { id: "es-abril", name: "AbrilNeural", style: "Cheerful, youthful" },
    ],
  },
  {
    language: "Hindi",
    code: "hi",
    voices: [
      { id: "hi-swara", name: "SwaraNeural", style: "Melodic, natural" },
      { id: "hi-madhur", name: "MadhurNeural", style: "Calm, narrating" },
      { id: "hi-ananya", name: "AnanyaNeural", style: "Bright, engaging" },
    ],
  },
  {
    language: "Urdu",
    code: "ur",
    voices: [
      { id: "ur-asad", name: "AsadNeural", style: "Rich, formal" },
      { id: "ur-uzma", name: "UzmaNeural", style: "Gentle, expressive" },
      { id: "ur-salman", name: "SalmanNeural", style: "Clear, confident" },
    ],
  },
  {
    language: "Arabic",
    code: "ar",
    voices: [
      { id: "ar-fatima", name: "FatimaNeural", style: "Elegant, smooth" },
      { id: "ar-hamdan", name: "HamdanNeural", style: "Authoritative, deep" },
      { id: "ar-zariyah", name: "ZariyahNeural", style: "Soft, natural" },
    ],
  },
];
