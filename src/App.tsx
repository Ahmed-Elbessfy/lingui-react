import { Trans, t, Plural, Select } from "@lingui/macro";
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
  const [numUsers, setNumUsers] = useState<number>(0);
  const [gender, setGender] = useState<string>("");

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

      {/* <div>
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
      </div> */}

      {/* <div>
        <p className="heading">
          Interpolation <span>=&gt;</span>
        </p>
        <p>
          <Trans>This talk is provided by : {"Squadio"}</Trans>
        </p>
        <p>
          <Trans>
            This talk is provided by : <strong>{"Squadio"}</strong>
          </Trans>
        </p>
      </div> */}

      {/* <div>
        <p className="heading">Context </p>
        <p>
          <Trans context="developer">
            <span>Bug</span> is bad news
          </Trans>
        </p>
        <p>
          <Trans context="entomologist">
            <span>Bug</span> is an magnificent creature
          </Trans>
        </p>
      </div> */}

      {/* <div>
        <p className="heading">
          Pluralization
          <span>=&gt;</span>
        </p>
        <input
          type="number"
          value={numUsers}
          min={0}
          onChange={(e) => setNumUsers(parseInt(e.target.value))}
        />
        <br />
        <Plural
          id="msg.plurals"
          value={numUsers}
          one={
            <span>
              Only <strong>one</strong> user is using this library!
            </span>
          }
          other={
            <span>
              <strong>{numUsers}</strong> users are using this library!
            </span>
          }
        />
      </div> */}

      {/* <div>
        <p className="heading">
          Custom Select
          <span>=&gt;</span>
        </p>
        <select onChange={(e) => setGender(e.target.value)} value={gender}>
          {[`male`, `female`].map((g) => (
            <option value={g}>{g}</option>
          ))}
        </select>
        <Select
          id="user.gender"
          value={gender}
          _male={<p>He responded to the message</p>}
          _female={<p>She responded to the message</p>}
          other={<p>No response</p>}
        />
      </div> */}

      <div>
        <p className="heading">
          Formatting numbers, currency & time
          <span>=&gt;</span>
        </p>

        <p>
          <Trans>{i18n.number(12345.6789, { minimumFractionDigits: 3 })}</Trans>
        </p>
        <p>
          <Trans>{i18n.number(12345.6789, { maximumFractionDigits: 1 })}</Trans>
        </p>
        <p>
          <Trans>
            {i18n.number(123344556, { style: "currency", currency: "USD" })}
          </Trans>
        </p>
        <p>
          <Trans>{i18n.date(new Date())}</Trans>
        </p>
        <p>
          <Trans>
            {i18n.date(new Date(), {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            })}
          </Trans>
        </p>
      </div>
    </div>
  );
}

export default App;
