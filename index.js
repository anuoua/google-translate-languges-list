const getUrl = require('./get_language_list_url')
const fetch = require('node-fetch')

let window = {
    LanguageDisplays: {
        nativeNames: undefined,
        localNames: undefined,
    }
}

function getLanguageList(isoLang, channel) {
    return fetch(getUrl(isoLang, channel), {
        method: "GET",
        timeout: 10000,
    })
    .then(res => res.text())
    .then(text => {
        eval(text)
        return window.LanguageDisplays
    })
}

module.exports = getLanguageList