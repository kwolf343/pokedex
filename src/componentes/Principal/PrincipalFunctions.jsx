import React, { useState, useEffect } from 'react';
import PokemonServices from '../../services/PokemonServices';

export function usePokemonData() {
    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 550);
    const [listaPokemon, setListaPokemon] = useState([]);
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenSmall(window.innerWidth < 550);
        };
        window.addEventListener('resize', handleResize);
        const fetchData = async () => {
            try {
                const response = await PokemonServices.obtenerPokemones();
                if (response) {
                    setListaPokemon(response.results);
                }
                try {
                    const pokeResponse = await PokemonServices.obtenerPokemonPorNombre('bulbasaur');
                    if (pokeResponse) {
                        setPokemon(pokeResponse);
                    }
                } catch (error) {
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
                setListaPokemon([]);
            }
        };
        fetchData();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const cambiarPokemon = async (nombreCambio) =>{
        try {
            const pokeResponse = await PokemonServices.obtenerPokemonPorNombre(nombreCambio);
            if (pokeResponse) {
                setPokemon(pokeResponse);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return { isScreenSmall, listaPokemon, pokemon, cambiarPokemon };
}
