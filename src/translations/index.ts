import { en } from "./en";
import { fi } from "./fi";
import { sv } from "./sv";

export const translations = {
  en,
  fi,
  sv,
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof en;
