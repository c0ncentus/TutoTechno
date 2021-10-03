import React, { Component, useState, useEffect } from 'react';



const CharPicker = (props: any) => {
  const [state, setState] = useState({ characters: [], isLoading: false });
  // ComponentWillMount
  // blabla

  // ComponentDidMount
  // blabla
  useEffect((() => {
    setState({ ...state, isLoading: true });
    fetch('https://swapi.co/api/people', {mode:"same-origin", }).then(response => { if (!response.ok) { throw new Error('Failed to fetch.'); } return response.json(); })
      .then(charData => {
        const selectedCharacters = charData.results.slice(0, 5);
        setState({ characters: selectedCharacters.map((char: any, index: number) => ({ name: char.name, id: index + 1 })), isLoading: false });
      })
      .catch(err => { console.log(err); });
  }),[])


  let content = <p>Loading characters...</p>;

  if (!state.isLoading && state.characters && state.characters.length > 0) {
    content = <select onChange={props.onCharSelect} value={props.selectedChar} className={props.side}>
      {state.characters.map((char: any) => (<option key={char.id} value={char.id}>{char.name}</option>))}
    </select>;
  } else if (!state.isLoading && (!state.characters || state.characters.length === 0)) { content = <p>Could not fetch any data.</p> }
  return content;
}
export default CharPicker;
