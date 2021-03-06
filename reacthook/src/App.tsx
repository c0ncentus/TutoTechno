import React, { useContext, useState } from 'react';

import CharPicker from './Component/CharPicker';
import Character from './Component/Character';
import { Todolist } from './Component/Theme';
import { Provider } from 'react-redux';
import { store } from './Store';

const App = () => {
  const [state, setState] = useState({
    selectedCharacter: 1,
    side: 'light',
    destroyed: false
  });

  // const sideHandler = (side: string) => {
  //   setState({ ...state, side: side });
  // };

  const charSelectHandler = (event: any) => {
    const charId = event.target.value;
    setState({ ...state, selectedCharacter: charId });
  };

  // const destructionHandler = () => {
  //   setState({ ...state, destroyed: true });
  // };


  let content = (
    <Provider store={store}>
      <Todolist />
      <CharPicker
        side={state.side}
        selectedChar={state.selectedCharacter}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={state.selectedCharacter} />
      {/* <button onClick={sideHandler.bind(this, 'light')}>
        Light Side
      </button>
      <button onClick={sideHandler.bind(this, 'dark')}>Dark Side</button>
      {state.side === 'dark' && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )} */}
    </Provider>
  );

  if (state.destroyed) {
    content = <h1>Total destruction!</h1>;
  }
  return content;
}
export default App;