import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
  // return Object.keys(state.pokemon).map((id) => state.pokemon[id]);
};
//

// {
//   pokemon: {
//     1: {
//       id: 1,
//       name: /*...*/,
//       image_url: /*...*/
//     },
//     2: {
//       id: 2,
//       name: /*...*/,
//       image_url: /*...*/
//     },
//   }
// }
