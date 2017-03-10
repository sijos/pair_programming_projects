import React, { Component } from 'react';
import { Link } from 'react-router';

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
      <div>
        <section className="pokelist">
          <ul>
            {pokemon.map((poke) => <IndividualPokemon poke={poke} key={poke.id}/>)}
          </ul>
        </section>
        <section className="rest-of-page">
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default PokemonIndex;

const IndividualPokemon = ({poke}) => {
  return (
    <li>
      <Link to={`/pokemon/${poke.id}`}>
        <span>{poke.id}</span>
        <img src={poke.image_url} className="pokemon-image"></img>
        <span>{poke.name}</span>
      </Link>
    </li>
  );
};
