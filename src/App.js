import React, { useState } from 'react';
import { Intro, NoChance } from './sections'
import Navbar from './components/navbar'
import { IntlProvider } from 'react-intl';

import en from './translations/en.json';
import es from './translations/es.json'

const messages = {
  en,
  es
}
const language = navigator.language.split(/[-_]/)[0];

const  App = () => {
  const [lang, setLang] = useState('en')
  return (
    <IntlProvider
      locale={language}
      defaultLocale={'en'}
      messages={messages[lang]}
    >
      <div className="App">
        <Navbar lang={lang} setLang={setLang} />
        <Intro />
        <NoChance />
      </div>
    </IntlProvider>
  );
}

export default App;
