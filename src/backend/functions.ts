import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_APIKEY,
  dangerouslyAllowBrowser: true,
});

const routes: { [key: string]: string } = {
  "/Ideal-Mind/": "Home",
  "/Ideal-Mind/about": "About",
  "/Ideal-Mind/solution": "Solution",
  "/Ideal-Mind/chat": "Chat",
};

// FUNCTION TO GET PATHNAME
export let getPathname = () => {
  return routes[location.pathname];
};

// OPENAI GENERATED RESPONSES
export const getChatResponse = (INSTRUCTIONS: any, ...newMessages: any[]) => {
  return openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [INSTRUCTIONS, ...newMessages],
  });
};
export const getAudioResponse = (femaleVoice: any, response: any) => {
  return openai.audio.speech.create({
    model: "tts-1",
    voice: `${!femaleVoice ? "alloy" : "onyx"}`,
    input: `${response.choices[0].message.content}`,
  });
};
