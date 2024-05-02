import DataServices from "./DataServices";

const PokemonServices = {
    obtenerPokemones: async () => {
        const dataservices = DataServices();
        return dataservices.getAllPokemons();
    },
    obtenerPokemonPorNombre: async (nombre) => {
        const dataservices = DataServices();
        return dataservices.getPokemonByName(nombre);
    }
};
export default PokemonServices;
