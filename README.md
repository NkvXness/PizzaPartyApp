# PizzaPartyApp

## Task - Who eats pizza?
We're going to have a party soon. Fortunately, somebody has created an API https://gp-js-test.herokuapp.com/pizza which returns the list of participants for this party. And our mama will make a pizza for us. There is only one issue - we don't know how to split this pizza evenly - that's why we need your help.
You need to get the list of participants from API and draw for me a pizza-slice, so I can split pizza into even pieces between all pizza eaters. Please, count only participants, who will eat pizza. For some strange reason, the number of pizza-eaters is always even... May this tip help you in drawing?


## How PizzaSliceApp should work?
Once the page is loaded we should see only the "Load" button
When clicking the "Load" button:
request for party participants should be launched, "waiting..." text should appear (while the request is ongoing), "Load" button should receive "loading" class
when the request arrives, the "waiting..." text should be hidden, "loading" class from the "Load" button should be removed
PizzaSlice drawing should appear
Text with the number of party participants and pizza eaters should be rendered under the PizzaSlice
How PizzaSliceApp should look?
The sketch already contains some elements for your fast start. Please, change styles anyhow you like to make the app look nice. You can use only CSS3 and HTML5, no external libs (like bootstrap or analogs).
Pizza slices drawing should reflect how you'd cut pizza for n eaters in real life.

Under the PizzaSlice place a text, which will tell how many participants will be at the party and how many of them will eat pizza. This text and PizzaSlice should be updated on every receive of participants by clicking the "Load" button.

## How/where to create PizzaSliceApp?
Use a draft created in CodeSandbox - https://codesandbox.io/s/ryvoym8vvn. Fork it, create an app, save your codesandbox, and submit your codesandbox link to the form - https://forms.gle/rL6z1H29ChUkb6kG9

## What to use
1.Do not use any frameworks (React, Angular, Vue, etc.)
2.Do not use any libs for requests (jquery, axios, etc.) - use fetch(), as in example codesandbox or for other work with JS (lodash, underscore, Ramda) - only plain JS,
3.For drawing the PizzaSlice use only HTML+CSS (SCSS, SASS are fine too). Try not to use SVG or Canvas. Try to think about what manipulations of general DOM elements (<div>, for example) can give you a "pizza-look" (CSS3 transform, for example).
