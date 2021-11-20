# Pokemon-App

Implementation of a simple web app in multiple frameworks.

## Challenge

Create a component that lists Pokémon names. The component should:

* show 10 names at a time
* allow stepping until an offset of 50
* visually transition whenever the list changes
* handle spam-clicking of buttons

The API call is: `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10`

## Style Guide

The component name is "Pokemon". The root HTML element should have an ID of `root` and a class `pokemon`.

The function and variable names are:

* `prev` and `next` for the button event handlers.
* `update` for fetching the Pokémon names from the API
