## Exercise: Pokemon API

### Objective
The objective of this exercise is to create a React app that retrieves data from the Pokemon API: https://pokeapi.co/api/v2/pokemon
The data (Pokemons) shall be displayed on the screen in a list format.

### Task #1 ⭐: Pokemon component 
create a functional component named `Pokemon`
- this component shall receive an `index` and a `pokemon` (JSON object) as props
- in the JSX return render a `<li>` element which contains a link to the pokemon URL (check the API to find out where this URL is stored). The text for the link should be the pokemon name.

### Task #2 ⭐: PokemonList component
Create a functional component named `PokemonList`:
- fetch the pokemon data from the API and store it in a state `pokemonList`. 
- Use `axios.get` and the `useEffect` hook to do this.
- don't forget to `await` the response
- map the `pokemonList` (list rendering) to create a Pokemon component (Task 1) for each element of your `pokemonList`
- wrap the elements in an unordered list

---

**When you are done until here, you can choose between the following tasks**

---

### Task #3 ⭐⭐: Extend the Pokemon component
- You already know: each pokemon has its own URL in the REST API. The JSON response of this endpoint contains links to images of the Pokemon (search for the `"sprites"` section).
- within the Pokemon component: fetch the data of the Pokemon URL (e.g. https://pokeapi.co/api/v2/pokemon/3/), extract the image url and display the image within the `<li>` element

### Task #4 ⭐⭐⭐: Pagination
Although I don't care much about styling: The list looks quite big. So it is a cool idea to add a `Pagination` component!
- create this component and wire it into your `App.js`
- add state for the `pageIndex` in your `App.js`
- Think about which props you might have to pass from `App` to `Pagination` (my spoilered idea is collapsed below)
- Do you have to move state, that you've created before? Refactor if you think so!
- within the pagination component you could create an array `availablePages` (no state needed here!). This array can be filled with JSX elements (e.g. `<span>`)
- add the necessary React attributes to this `<span>` (`key`, `onClick`-handler)

<details>
<summary>Spoiler: props that need to be passed from <code>App</code> to <code>Pagination</code>
</summary>
<ul>
<li>pageIndex</li>
<li>numberOfPokemons</li>
<li>setPageIndex (callback method)</li>
</ul>
</details>
