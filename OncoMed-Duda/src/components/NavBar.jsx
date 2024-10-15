import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div>
      <div class="alinhamento_navbar">
    <nav class="nav_bar">
        <button onClick={() => set_pagina()}><img src="Logo_SA.png" alt="Logo SA" /></button>
        <button onClick={() => set_pagina()}>MARCAR CONSULTA</button>
        <button onClick={() => set_pagina()}>AGENDAMENTOS</button>
        <button onClick={() => set_pagina()}>SOBRE NÓS</button>
        <button onClick={() => set_pagina()}>BLOG</button>
    </nav>
</div>
    </div>
  )
}

export default NavBar
