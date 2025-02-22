import React from "react";

export default function Favorite(props: any): JSX.Element {
  const { pokemon, store, toggleFavorite, party } = props;
  const { state, dispatch } = store;
  // console.log(props);
  // console.log(pokemon);
  let filtered = party.filter((poke: any) => poke.id === pokemon.id)

  return (
    <div>
      {party.includes(filtered[0]) ? (
        <i
          className="material-icons text-gray-200 mt-2 ml-2 text-md"
          onClick={() => toggleFavorite(state, dispatch, pokemon)}
        >
          favorite
        </i>
      ) : (
        <i
          className="material-icons text-gray-200 mt-2 ml-2 text-md"
          onClick={() => toggleFavorite(state, dispatch, pokemon)}
        >
          favorite_border
          {/* {console.log("render")} */}
        </i>
      )}
    </div>
  );
}
