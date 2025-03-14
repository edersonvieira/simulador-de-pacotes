import { useState } from 'react'
import './App.css'
import Card from './components/CardPacote'
import ModalFormPacote from './components/ModalFormPacote'

function App() {
  const [adicionarPacoteModal, setAdicionarPacoteModal] = useState(false)
  const [pacotes, setPacotes] = useState([])


  const changeAdicionarPacoteModal = () => {
    setAdicionarPacoteModal(true)
  }

  return (
    <>
      <header>
        <p>Simulador de Pacotes</p>
        <button className='adicionar' onClick={changeAdicionarPacoteModal}>Adicionar Pacote</button>
      </header>
      <grid>
        <main>
          <Card />
          <ModalFormPacote />
        </main>
      </grid>
      <footer>
        <p><a href='https://afira.io' target='_blank'>Utilize com a plataforma IOT da Afira Tecnologias LTDA</a></p>
      </footer>
    </>
  )
}

export default App
