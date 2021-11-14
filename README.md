# js-intl

## Installing

In order to use the package first you need to install the package using below commands.

Using npm:

```bash
$ npm install js-intl
```

## Example

### note: Es6 Modules usage

Create a JS file `main.js` and import `jsIntl` from `js-intl` as named import (Es6 module).

```js
import { jsIntl } from 'js-intl'
```

Create another JS file `translation.js`. Here you would write your translations.

```js
const translation =   {
        en: {
            strings: {
                'testPage.greetings': 'Hello there! How are you?'
            },
        },
        es: {
            strings: {
                'testPage.greetings': '¡Hola! ¿Cómo estás?'

            },
        },
        fr: {
            strings: {
                'testPage.greetings': 'Bonjour! Comment ca va?'

            },
        },
        pt: {
            strings: {
                'testPage.greetings': 'Olá! Como você está?'
            },
        },
    },
```

Create a HTML file `index.html`.

```js
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Internationalization</title>
        <script defer type="module" src="./main.js"></script>
    </head>

    <body lang="en">
        <div class="container">
            <div data-key="testPage.greetings">Hello there! How are you</div>
        </div>
    </body>
</html>

```

import translations in `main.js`.

```js
import { translation } from './translation.js'
import { jsIntl } from 'js-intl'

jsIntl(translation, 'fr')
```

## Demo

[Live demo of the app](https://stoic-bhabha-f10f33.netlify.app/)
[Github repo](https://github.com/nirmalkar/test-js-intl)
