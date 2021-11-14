/**
 * @param {object} translations contains all the languages and the corresponding translations
 * @param {string} lang this would be the language that you would like to translate out your page.
 */
export function jsIntl(translation, lang) {
    let langNode = document.querySelectorAll('html [lang]')
    applyStringsToElements(langNode)
    function applyStringsToElements(containers) {
        containers.forEach((container) => {
            container.querySelectorAll(`[data-key]`).forEach((element) => {
                let key = element?.getAttribute('data-key')
                if (key) {
                    element.textContent = translation[lang].strings[key]
                }
            })
        })
    }
}
