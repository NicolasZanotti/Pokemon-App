const css = /*css*/ `
  .pokemon ul {
      min-height: calc(1rem * 10);
  }
  .pokemon li {
      height: 1rem;
  }
`;

const html = props => /*html*/ `
  <style>${css}</style>
  <h1>List of Pokémon</h1>
  <ul>
    ${props.data.map(item => `<li>${item.name}</li>`).join("")}
  </ul>
  <button class="prev" ${props.prevDisabled ? "disabled" : ""}>Previous</button>
  &nbsp;
  <button class="next" ${props.nextDisabled ? "disabled" : ""}>Next</button>
`;

const model = {
  offset: 0,
  limit: 10,
  data: [],
  onChange() {},
  async update() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${this.limit}&offset=${this.offset}`
    );
    const json = await response.json();
    this.data = json.results;
    this.onChange();
  },
  next() {
    this.offset += this.limit;
    this.update();
  },
  prev() {
    this.offset -= this.limit;
    this.update();
  },
};

const state = {
  loading: true,
};

function onNext() {
  if (state.loading) return;
  state.loading = true;
  model.next();
}

function onPrev() {
  if (state.loading) return;
  state.loading = true;
  model.prev();
}

function onRootElementClick(event) {
  switch (event.target.classList.toString()) {
    case "prev":
      onPrev();
      break;
    case "next":
      onNext();
      break;
  }
}

export default function PokémonListing(rootElement) {
  if (!rootElement) throw new Error("Missing root element.");
  
  // Add event listeners
  rootElement.addEventListener("click", onRootElementClick);
  model.onChange = function () {
    state.loading = false;
    rootElement.innerHTML = html({
      data: model.data,
      prevDisabled: model.offset === 0,
      nextDisabled: model.offset === 30,
    });
  };
  
  // Init
  model.update();
}
