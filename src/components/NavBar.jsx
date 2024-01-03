import React from "react";



function NavBar ({pokemonPrecedent, pokemonSuivant}) {
    return (
        <nav>
          <button onClick={pokemonPrecedent}>Precedent</button> 
          <button onClick={pokemonSuivant}>Suivant</button>
        </nav>
      )
}

export default NavBar;