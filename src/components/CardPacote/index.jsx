import { useState } from "react";
import './style.css'

function CardPacote() {

    return (
        <div className='card'>
            <div className='card-status-ativo'>
                <p>Ativo</p>
                <i className="las la-edit icon-style"></i>
            </div>
            <div className='card-title'>
                <h2>Nome do Pacote</h2>
                <div className='card-title-buttons'>
                </div>
            </div>
            <div className='card-subtitle'>
                <p>Comunicação: MQTT</p>
                <p>Broker: messege.afira.io:1883</p>
            </div>
            <div className='card-campos-title'>
                <h3>Campos</h3>
                <i className="las la-plus-square icon-style"></i>
            </div>
            <table className='card-table-campos'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Teste</td>
                        <td>Inteiro</td>
                        <td>
                            <i className="las la-edit icon-style"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='card-actions'>
                <button className='white-button'>Ver Pacote</button>
                <button className='white-button'>Simular Pacote</button>
            </div>
        </div>
    )
}

export default CardPacote