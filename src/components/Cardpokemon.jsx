
import { useEffect } from 'react'
import { useState } from 'react';
import style from "./style/Card.module.css"
export function CardPoke() {

    const [pokemones, setPokemones] = useState([])

    useEffect(() => {
        const getPokemones = async () => {
            //recuperamos el listado de los pokemones
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            const listaPokemones = await response.json()
            const { results } = listaPokemones

            const newPokemones = results.map(async (pokemon) => {


                const response = await fetch(pokemon.url)
                const poke = await response.json()

                return {
                    id: poke.id,
                    name: poke.name,
                    img: poke.sprites.other.dream_world.front_default

                }


            })
            setPokemones(await Promise.all(newPokemones));


        }

        getPokemones()
    }, []);

    return (
        <>



            {
                pokemones.map(pokemon => {
                    return (


                        <>
                            <div>
                                <span>{pokemon.name}
                                </span>
                                <h1>
                                    {pokemon.id}
                                </h1>

                                <img className='img' src={pokemon.img} alt={pokemon.name} />


                            </div>

                        </>


                    )
                }
                )
            }

        </>
    )
}