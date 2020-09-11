import React from 'react';
import ShoppingApp from "./components/ShoppingApp"

function App() {
  return (
    <div className="App">
      <header className="container my-3">
        <h1>Ma liste de courses</h1>
        On va faire une shopping list! Wallah c'est bien!!
        <ShoppingApp />
      </header>
    </div>
  );
}

export default App;
