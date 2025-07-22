"use client"

import styles from './Header.module.css'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>MS</h1>

      <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Serviços</a>
        <a href="#">Clientes</a>
        <a href="#">Contato</a>
      </nav>

      <button className={styles.quoteButton}>Solicitar orçamento</button>

      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  )
}
