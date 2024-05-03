import React from 'react';
import './App.css'
import Page from './Page/HomePage';
import DetailPage from './Page/DetailPage';
import { Route, Routes } from 'react-router-dom';
// import usePokemonList from './hooks/usePokemonList'
// import usePokemonDetails from './hooks/usePokemonDetail'

function App(){
  // Use the custom hook to fetch pokemon list
  // Example below
  // const list = usePokemonList();
  // const detail = usePokemonDetails("bulbasaur");

  return (
    <Routes>
      <Route path='/' element={<Page/>}/>
      <Route path='/pokemon/:name' element={<DetailPage/>}/>
    </Routes>
  );
}

export default App;
