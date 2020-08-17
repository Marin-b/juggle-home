import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from 'react-intl';

import en from './translations/en.json';
import es from './translations/es.json'

const messages = {
  en,
  es
}
const language = navigator.language.split(/[-_]/)[0];
console.log(language)
ReactDOM.render(
   <IntlProvider
    locale={language}
    defaultLocale={'en'}
    messages={messages['es']}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
   </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
