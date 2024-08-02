import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CreateBook from './pages/CreateBooks';
import Home from './pages/Home';
import DeleteBook from './pages/DeleteBook'; 
import EditBook from './pages/EditBook'; 
import ShowBook from './pages/ShowBook'; 



export const App = () => {
  return (
    <Routes>
      <Route path='/' element ={ <Home />} />
      <Route path='/books/create' element ={<CreateBook />} />
      <Route path='/books/deatils/:id' element ={<ShowBook />} />
      <Route path='/books/edit/:id' element ={<EditBook />} />
      <Route path='/books/delete/:id' element ={<DeleteBook />} />
    </Routes>
  );
};
