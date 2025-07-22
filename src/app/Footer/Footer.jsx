import styles from './Footer.module.css'
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h4>Atendimentos MS</h4>
          <p><strong>(19) 99003-5519</strong></p>
          <p>(19) 99999-9999</p>
          <p>servico.msmanutencao@gmail.com</p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.column}>
          <h4>Nossa Localização</h4>
          <p>Endereço: Rod. Campinas-Mogi Mirim, 136, Jaguariúna - SP, 13820-000</p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.column}>
          <h4>Siga-nos</h4>
          <div className={styles.socialIcons}>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© 2025 MS Manutenções | CNPJ: 12.345.678/0001-90 - Empresa registrada e regulamentada conforme as leis brasileiras.</p>
        <p>© Copyright 2025 - Desenvolvimento: <a href="#">Collab X</a></p>
      </div>
    </footer>
  )
}
