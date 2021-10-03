import React, { Component, useEffect, useMemo, useState } from 'react';

import Summary from './Summary';

const Character = (props: any) => {
  const [state, setState] = useState({ loadedCharacter: {} as any, isLoading: false });
  useEffect(() => { fetchData(); }, [props.selectedChar])
  useEffect(() => { return () => { console.log("componentUnMount") } }, [])
  const fetchData = () => {
    console.log(
      'Sending Http request for new character with id ' +
      props.selectedChar
    );
    setState({ ...state, isLoading: true });
    fetch('https://swapi.dev/api/people/' + props.selectedChar)
      .then(response => {
        if (!response.ok) { throw new Error('Could not fetch person!'); }
        return response.json();
      })
      .then(charData => {
        const loadedCharacter = {
          id: props.selectedChar, name: charData.name, height: charData.height,
          colors: { hair: charData.hair_color, skin: charData.skin_color },
          gender: charData.gender, movieCount: charData.films.length
        };
        setState({ loadedCharacter: loadedCharacter, isLoading: false });
      })
      .catch(err => { console.log(err); });
  };

  let content = <p>Loading Character...</p>;

  if (!state.isLoading && state.loadedCharacter.id) {
    content = (
      <Summary
        name={state.loadedCharacter.name}
        gender={state.loadedCharacter.gender}
        height={state.loadedCharacter.height}
        hairColor={state.loadedCharacter.colors.hair}
        skinColor={state.loadedCharacter.colors.skin}
        movieCount={state.loadedCharacter.movieCount}
      />
    );
  } else if (!state.isLoading && !state.loadedCharacter.id) {
    content = <p>Failed to fetch character.</p>;
  }
  return content;
}
export default Character;
// export default useMemo(Character, (prev:any, next:any ) => { return true });
