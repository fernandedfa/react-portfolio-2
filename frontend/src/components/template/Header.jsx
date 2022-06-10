import React, { useState } from 'react';
import './Header.css';
import { List, Github, Linkedin } from 'react-bootstrap-icons';

export default props => {

    const [toggle, setToggle] = useState(false)
    const onclick = () => {
        if (!toggle) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }

    return (
        <header className="header">
            <section className="logo">
                <span className="logo">{`< D />`}</span>
            </section>
            <section className="menu" onClick={onclick}><List size={32} /></section>

            {
                toggle ?

                    <nav className="nav">
                        <ul>
                            <a href="#" rel="noreferrer">
                                <li>Portfólio</li>
                            </a>

                            <a href="#" rel="noreferrer">
                                <li>Skills</li>
                            </a>
                            <a href="#" rel="noreferrer">
                                <li>Contato</li>
                            </a>
                        </ul>
                    </nav>
                    : null
            }

            <section className="icons-social">
                <a href="https://github.com/fernandedfa" target="_blank" rel="noreferrer"><Github size={25} /></a>
                <a href="https://br.linkedin.com/in/deivisonfernandes" target="_blank" rel="noreferrer">  <Linkedin size={25} /></a>
            </section>
        </header>
    )
}