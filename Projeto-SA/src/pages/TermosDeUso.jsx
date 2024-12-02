import Header from "../components/Header"
import React from 'react'
import Footer from "../components/Footer"
import './TermosDeUso.css'
import { Link } from "react-router-dom"

function TermosUso() {
   return (
      <div> <Header />
         <div className='Termos-Uso'>
            <div className="titulo-termosUso">
               <h1>TERMOS DE USO</h1>
               <div className='Linha-Dois'></div>
               <Link className='link-OutraPag' to={'/politicaPrivacidade'}>POLÍTICA DE PRIVACIDADE</Link>
            </div>

            <div className='Texto-Um'>
               <h2>ABCDEFGH</h2>

               <p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s
                  with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.</p>
            </div>

            <div className='Texto-Dois'>
               <h2>ABCDEFGH</h2>

               <p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s
                  with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.</p>
            </div>
         </div>
         {<Footer />}
      </div>
   )
}

export default TermosUso