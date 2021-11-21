# Pokemon-App

This is an implementation of a simple web app in multiple frameworks. The purpose of this repository is to gain a personal understanding of each of the tested frameworks. The implementations only cover the basics and do not reflect the overall quality for each framework at a larger (more typical) scale.

## Challenge

Create a component that lists Pokémon names. The component should:

* fetch data from an API endpoint
* show 10 names at a time
* allow stepping backwards and forwards between the first 50 names
* visually transition whenever the list changes
* handle spam-clicking of buttons

The API call is: `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`

Retrieving the next 10 names is done by changing the GET parameter `offset`.

## Style Guide

The component name is "Pokemon". The root HTML element should have an ID of `root` and a class `pokemon`.

The function and variable names are:

* `prev` and `next` for the button event handlers;
* `update` for fetching the Pokémon names from the API;
* `Pokemon` as the app/component name.

The below base template includes the empty state of the component.

```html
<div id="root" class="pokemon">
    <h1>List of Pokémon</h1>
    <ul>
        <li>░░░░░░</li>
        <li>░░░░░</li>
        <li>░░░░░░░</li>
        <li>░░░░</li>
        <li>░░░░░░░░░</li>
        <li>░░</li>
        <li>░░░░░░░</li>
        <li>░░░░░</li>
        <li>░░░░</li>
        <li>░░░</li>
    </ul>
    <button disabled>Previous</button>&nbsp;<button>Next</button>
</div>
```

```css
.pokemon {
    font-family: sans-serif;
}

.pokemon ul {
    position: relative;
    padding-left: 1rem;
}

.pokemon li {
    font-size: 1rem;
    margin-bottom: 0.2rem;
}
```
