import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from './fr-FR/fr-fr.js';

i18n
	.use(LanguageDetector)
	.init({
		fallbackLng: 'fr',
		debug: true,
		ns: 'translation',
        defaultNS: 'translation',

		interpolation: {
			escapeValue: false,
		},

		resources: {
			fr
		},

		react: {
			wait: false,
			nsMode: 'default' // set it to fallback to let passed namespaces to translated hoc act as fallbacks
		}
	});

export default i18n;