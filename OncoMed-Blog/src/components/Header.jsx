import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div>
            {/* Nav Bar Home Page  */}
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

export default Header
