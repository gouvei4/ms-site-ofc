"use client"

import styles from './Header.module.css'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'

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
      <Link href="/">Início</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/servicos">Serviços</Link>
      <Link href="/contato">Contato</Link>
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
