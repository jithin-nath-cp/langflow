import { getLocalStorage, setLocalStorage } from "@/utils/local-storage-util";

export const checkProvider = () => {
  const audioSettings = JSON.parse(
    getLocalStorage("vyturrlynk_audio_settings_playground") || "{}",
  );
  if (!audioSettings?.provider) {
    setLocalStorage(
      "vyturrlynk_audio_settings_playground",
      JSON.stringify({ provider: "openai", voice: "alloy" }),
    );
  }
};
