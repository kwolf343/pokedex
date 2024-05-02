import React, { useState, useEffect } from 'react';
import "./Principal.css";
import pokedex from "../../images/pokedex.png"
import pokedex2 from "../../images/pokedex2.png"
import Pokemon from "../Pokemon/Pokemon";
import InfoPokemon from "../InfoPokemon/InfoPokemon";
import { usePokemonData } from './PrincipalFunctions';

function Principal() {
    const { isScreenSmall, listaPokemon, pokemon, cambiarPokemon } = usePokemonData();

    return (
        <div className="pokedex">
            <div className="contenido-pokemon">
                {pokemon ? (
                    <Pokemon
                        url={pokemon.sprites.front_default}
                        nombre={pokemon.forms[0].name}
                        tipos={pokemon.types}
                    />
                ) : null}
                <div className='contenido-lista'>
                    <ul className='lista-nombres-pkmn'>
                        {listaPokemon.map((pkmn, index) => (
                            <li key={index}>
                                <InfoPokemon
                                    numero={index + 1}
                                    nombre={pkmn.name}
                                    cambiarPokemon={() => cambiarPokemon(pkmn.name)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isScreenSmall ? (
                <img src={pokedex2} alt="Pokedex" />
            ) : (
                <img src={pokedex} alt="Pokedex" />
            )}
        </div>
    );
}

export default Principal;
