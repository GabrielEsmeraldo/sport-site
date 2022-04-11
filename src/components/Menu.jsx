import React from 'react'
import Image from 'next/image'
import Button from './Button'

export default function Menu() {
    return (
        <header>
            <nav>
                <Image className='logo' src="/img/logo.png" alt="logo" width="28px" height="28px" />
                <ul>
                    <li>Home</li>
                    <li>Programa</li>
                    <li>Resultados</li>
                    <li>Contatos</li>
                </ul>
                <Button style="btn-secondary" value="Solicite um orçamento"></Button>
            </nav>
        </header>
    )
}