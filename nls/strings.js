import en_CA from './strings.en-ca.js';
import fr_CA from './strings.fr-ca.js';

var SupportedLanguages = ["en-ca", "fr-ca"];
const defaultLanguage = fr_CA;

function getStrings(){
    var strings = null;

    // do we have a locale set ?
    let urlparams = new URLSearchParams(window.location.search);
    let locale = urlparams.get("locale");
    if (locale){
        strings = findLanguage(locale);
        // do we support it ?
        if (strings) {
            return strings;
        }
    }

    // what is the browser's current language ?
    let language = navigator.language;
    if (language){
        strings = findLanguage(language);
        // do we support it ?
        if (strings) {
            return strings;
        }
    }

    // we don't support the browser language and the requested local. return the default strings.
    return defaultLanguage;
}

function findLanguage(sLocale){
    switch (sLocale){
        case "en-CA":
        case "en-US":
        case "en":
            return en_CA;
        break;
        case "fr-fr":
        case "fr-ca":
        case "fr":
            return fr_CA;
        break;
        default:
            return null;
    }
}

export { SupportedLanguages };
export default getStrings();