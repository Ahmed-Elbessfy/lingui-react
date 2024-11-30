import { Trans, t } from "@lingui/macro";
import { i18n, MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/macro";
import { useState } from "react";
import "./App.css";

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
      {/* <div>
        <p className="heading">
          Basic case <span>=&gt;</span>
        </p>
        <p>
          <Trans>Hello World</Trans>
        </p>
        <p>
          <Trans>Free Palestine</Trans>
        </p>
      </div> */}

      <div>
        <p className="heading">
          Methods to define text for translation Interpolation
          <span>=&gt;</span>
        </p>
        <p>
          <Trans id="msg.docs">
            Read the <a href="https://lingui.dev">documentation</a>
            for more info.
          </Trans>
        </p>
        <img src="./logo.png" alt={t`Logo of Lingui Project`} />
        <div>
          <p>Lazy Translations: (Dynamic Translation)</p>
          {[msg`orange`, msg`apple`, msg`banana`].map(
            (fruit: MessageDescriptor, i: number) => (
              <p key={i}>{i18n._(fruit)}</p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
