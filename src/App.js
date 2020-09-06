import React, { useState } from 'react';
import { Intro, NoChance, Category, Jugglers, Footer  } from './sections'
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
  const [appUrl, setAppUrl] = useState('#')

  const fetchUrl = () => {
    if (appUrl != '#') { return }

    fetch('https://juggletechnologies-78310.firebaseio.com/app-url.json?auth=' + process.env.REACT_APP_FIREBASE_AUTH)
      .then(res => res.json())
      .then(body => setAppUrl(body.url))
  }
  fetchUrl()
  return (
    <IntlProvider
      locale={language}
      defaultLocale={'en'}
      messages={messages[lang]}
    >
      <div className="App">
        <Navbar lang={lang} setLang={setLang} />
        <Intro appUrl={appUrl} />
        <NoChance />
        <Category />
        <Jugglers />
        <Footer appUrl={appUrl} />
      </div>
    </IntlProvider>
  );
}

export default App;
