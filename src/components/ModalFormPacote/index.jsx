import { useState } from "react";
import './style.css'

function ModalFormPacote () {
    const [nome, setNome] = useState('')
    const [comunicacao, setComunicacao] = useState('MQTT')
    const [broker, setBroker] = useState('message.afira.io')
    const [porta, setPorta] = useState(1883)
    const [pub, setPub] = useState('')
    const [sub, setSub] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [enderecoHTTP, setEnderecoHTTP] = useState('')
    const [metodo, setMetodo] = useState('POST')
    const [tempoDeReporte, setTempoDeReporte] = useState(1)

    return (
        <>
        <div className="modal-container">
            <div className="modal">
                <div className="modal-title">
                    <h2>Novo Pacote</h2>
                    <p class="exit">⨉</p>
                </div>
                <div className="modal-body">
                    {
                        
                    }
                    <div className="row">
                        <div className="input-group">
                            <label>
                                Nome
                            </label>
                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label>Comunicação</label>
                            <select>
                                <option>MQTT</option>
                                <option>HTTP</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group">
                            <label>Broker</label>
                            <input type="text" value={broker} onChange={(e) => setBroker(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label>Porta</label>
                            <input type="number" value={porta} onChange={(e) => setPorta(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group">
                            <label>Pub</label>
                            <input type="text" value={pub} onChange={(e) => setBroker(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label>Sub</label>
                            <input type="number" value={sub} onChange={(e) => setPorta(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="row">
                        <button className="adicionar" style={{width: "100%"}}>Salvar</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModalFormPacote