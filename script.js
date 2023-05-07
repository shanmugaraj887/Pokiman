const baseUrl = 'https://pokeapi.co/api/v2';
const itemsPerPage = 50;

let currentPage = 1;

async function getPokemons(offset) {
	try {
		const response = await fetch(`${baseUrl}/pokemon?limit=${itemsPerPage}&offset=${offset}`);
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error(error);
	}
}

async function getPokemonData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

function createPokemonCard(pokemon) {
	const card = document.createElement('div');
	card.className = 'pokemon-card';

	const name = document.createElement('div');
	name.className = 'pokemon-name';
	name.innerText = pokemon.name;
	card.appendChild(name);

	const image = document.createElement('img');
	image.className = 'pokemon-image';
	image.src = pokemon.sprites.front_default;
	card.appendChild(image);

	const abilities = document.createElement('div');
	abilities.className = 'pokemon-ability';
	abilities.innerText = 'Abilities: ' + pokemon.abilities.map(a => a.ability.name).join(', ');
	card.appendChild(abilities);

	const moves = document.createElement('div');
	moves.className = 'pokemon-moves';
	moves.innerText = 'Moves: ' + pokemon.moves.map(m => m.move.name).join(', ');
	card.appendChild(moves);

	const weight = document.createElement('div');
	weight.className = 'pokemon-weight';
	weight.innerText = 'Weight: ' + pokemon.weight + ' kg';
	card.appendChild(weight);

	return card;
}

function displayPokemons(pokemons) {
	const pokemonContainer = document.getElementById('pokemon-container');
	pokemonContainer.innerHTML
}