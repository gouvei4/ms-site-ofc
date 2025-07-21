import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>MS</h1>
      <nav className={styles.nav}>
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Serviços</a>
        <a href="#">Clientes</a>
        <a href="#">Contato</a>
      </nav>
      <button className={styles.quoteButton}>Solicitar orçamento</button>
    </header>
  )
}
