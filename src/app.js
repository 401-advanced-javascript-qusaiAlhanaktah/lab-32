import React from 'react';
import ToDo from './components/todo/todo-connected.js';
import Header from './components/todo/header.js';
import Footer from './components/todo/footer.js';
function App (){
    return (
      <>
        <Header />
        <ToDo />
        <Footer />
      </>
    );
}
export default App;
