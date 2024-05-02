import axios from 'axios';

const DataServices = () => {
    const getAllPokemons = () => {
        return axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Error al cargar los pokemones:', error);
                throw error;
            });
    }
    const getPokemonByName = (name) => {
        return axios.get('https://pokeapi.co/api/v2/pokemon/'+name)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Error al cargar el pokemon:', error);
                throw error;
            });
    }
    return {
        getAllPokemons,
        getPokemonByName
    };
}
export default DataServices;