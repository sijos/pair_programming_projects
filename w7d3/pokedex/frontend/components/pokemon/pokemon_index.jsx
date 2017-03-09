import React, { Component } from 'react';

class PokemonIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    let pokemon = this.props.pokemon;
    return (
      <ul>
        {pokemon.map((poke) => <IndividualPokemon poke={poke} key={poke.id}/>)}
      </ul>
    );
  }
}

export default PokemonIndex;

const IndividualPokemon = ({poke}) => {
  return (
    <li>
      <h5>{poke.name}</h5>
      <img src={poke.image_url} className="pokemon-image"></img>
    </li>
  );
};
