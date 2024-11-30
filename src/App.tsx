import { Trans } from "@lingui/macro";
import "./App.css";
import { i18n } from "@lingui/core";
import { useState } from "react";

function App() {
  const dynamicActivate = async (lang: string) => {
    const { messages } = await import(`./locales/${lang}/messages.ts`);
    i18n.load(lang, messages);
    i18n.activate(lang);

    setCurrentLanguage(lang);
  };

  const [currentLanguage, setCurrentLanguage] = useState<string>("en");
  return (
    <div dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
      <h1>Internationalization (i18n) with Lingui</h1>
      <select onChange={(event) => dynamicActivate(event.target.value)}>
        {[
          { lang: "en", name: "English" },
          { lang: "ar", name: "العربية" },
        ].map((option) => {
          return (
            <option value={option.lang} key={option.lang}>
              {option.name}
            </option>
          );
        })}
      </select>

      <hr />
      <div>
        <p className="heading">
          Basic case <span>=&gt;</span>
        </p>
        <p>
          <Trans>Hello World</Trans>
        </p>
        <p>
          <Trans>Free Palestine</Trans>
        </p>
      </div>
    </div>
  );
}

export default App;
