import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.pokemonId !== newProps.params.pokemonId) {
      this.props.requestOnePokemon(newProps.params.pokemonId);
    }
  }

  componentDidMount() {
    this.props.requestOnePokemon(this.props.params.pokemonId);
  }

  render() {
    if (this.props.pokemonDetail !== {} || this.props.pokemonDetail) {
      const { image_url, name, poke_type, attack, defense, moves, items } = this.props.pokemonDetail;

      let formattedMoves;
      if (moves) {
        formattedMoves = moves.join(", ");
      }
      return (
        <section className="poke-detail">
          <img src={image_url} className="pokeImg"></img>
          <h2>{this.props.pokemonDetail.name}</h2>
          <ul className="poke-detail-ul">
            <li>{poke_type}</li>
            <li>{attack}</li>
            <li>{defense}</li>
            <li>Moves: {formattedMoves}</li>
          </ul>
          <section className="items-section">
            <h3>Items</h3>
            <ul className="poke-detail-items">
              { items ? items.map((item, idx) => <li key={idx}><img src={`${item.image_url}`}></img></li>) : undefined }
            </ul>
            { this.props.children }
          </section>
        </section>
      );
    } else {
      return (
        <div></div>
      );
    }


  }
}

/*
t.string   "name",                    null: false
t.integer  "attack",                  null: false
t.integer  "defense",                 null: false
t.string   "poke_type",               null: false
t.string   "moves",      default: [], null: false, array: true
t.string   "image_url",               null: false
*/

export default PokemonDetail;
