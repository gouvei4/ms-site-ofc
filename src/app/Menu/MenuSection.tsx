"use client"

import styles from './Header.module.css'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
  <div className={styles.left}>
    <Image
      src="/logo.png"
      alt="Logo MS"
      width={120}
      height={40}
      className={styles.logo}
    />
  </div>

  <div className={styles.center}>
    <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
      <a href="/">Início</a>
      <a href="/sobre">Sobre</a>
      <a href="/servicos">Serviços</a>
      <a href="#">Clientes</a>
      <a href="/contato">Contato</a>
    </nav>
  </div>

  <div className={styles.right}>
    <button className={styles.quoteButton}>Solicitar orçamento</button>

    <button
      className={styles.menuToggle}
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Menu"
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>
</header>

  )
}
