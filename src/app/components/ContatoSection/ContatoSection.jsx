import Header from '@/app/Menu/MenuSection'
import styles from './ContatoSection.module.css'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Footer from '@/app/Footer/Footer'
import { HiOutlineMail, HiOutlineClock } from 'react-icons/hi'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

export default function ContatoSection() {
  return (
    <section className={styles.contatoSection}>
      <Header />
      <h2 className={styles.title}><span>Nosso</span> contato</h2>

      <div className={styles.container}>
        {/* Formulário */}
        <div className={styles.formBox}>
          <h3>Entre em contato conosco</h3>
          <p>Tire suas dúvidas, peça um orçamento ou fale com nosso time.</p>

          <form>
            <input type="text" placeholder="Nome completo" required />
            <input type="email" placeholder="E-mail" required />
            <input type="text" placeholder="Whatsapp (opcional)" />
            <textarea placeholder="Mensagem" rows="4" required />
            <button type="submit">Enviar mensagem</button>
          </form>
        </div>

        {/* Informações */}
        <div className={styles.infoBox}>
          <h3>Informações da empresa</h3>
          <ul>
            <li>
              <FaMapMarkerAlt size={18} color="#f67828" />
              Rod. Campinas-Mogi Mirim, 136, Jaguariúna - SP, 13820-000
            </li>
            <li>
              <FaPhoneAlt size={18} color="#f67828" />
              (19) 99003-5519 / (19) 99003-5519
            </li>
            <li>
              <HiOutlineMail size={20} color="#f67828" />
              servicos.msmanutencao@gmail.com
            </li>
            <li>
              <HiOutlineClock size={20} color="#f67828" />
              Seg à Sex - 07h às 16:48h
            </li>
          </ul>



          <div className={styles.icons}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={28} color="#f67828" />
            </a>
            <a href="https://wa.me/5519990035519" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={28} color="#25D366" />
            </a>
            <a href="mailto:servicos.msmanutencao@gmail.com">
              <HiOutlineMail size={30} color="#555" />
            </a>
          </div>

          <div className={styles.mapContainer}>
            <iframe
              title="Mapa MS Manutenções"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1840.9497285218179!2d-47.004154!3d-22.657537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8e9d4e6bc389d%3A0xff9bc30350615373!2zTVMgTWFudXRlbsOnw7Vlcw!5e0!3m2!1spt-BR!2sbr!4v1753144927366!5m2!1spt-BR!2sbr"
              loading="lazy"
              className={styles.mapFrame}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
      <Footer />
    </section>
  )
}
