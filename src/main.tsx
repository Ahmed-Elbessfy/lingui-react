import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as en_messages } from "./locales/en/messages.ts";
import { messages as ar_messages } from "./locales/ar/messages.ts";

// initial language loading
i18n.load({
  en: en_messages,
  ar: ar_messages,
});
i18n.activate("en");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  </StrictMode>
);
