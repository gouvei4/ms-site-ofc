import styles from './HeroSection.module.css'
import Image from 'next/image'
import Header from '../Menu/MenuSection'
import soldadorImg from '../../../public/soldador.png'
import setaImg from '../../../public/arrow.png'
import dotImg from '../../../public/dot.png'
import dotImgLeft from '../../../public/dot.png'
import { GoArrowUpRight } from 'react-icons/go'

export default function HeroSection () {
  return (
    <section className={styles.hero}>
      <Header />
      <div className={styles.content}>
        <div className={`${styles.textBlock} ${styles.fadeInRight}`}>
          <p className={styles.subtitle}>Olá, somos a MS Manutenções</p>
          <h2 className={styles.title}>
            Te <span className={styles.highlight}>ajudando</span>{' '}
            <span className={styles.noBreak}>a superar</span>
            <br />
            desafios no dia a dia
          </h2>

          <Image src={setaImg} alt='Seta apontando' className={styles.seta} />

          <p className={styles.description}>
            Com a MS, você não enfrenta os desafios do dia a dia sozinho.
            Estamos aqui para oferecer as melhores soluções em manutenção e
            equipamentos, garantindo segurança, agilidade e resultados para sua
            operação.
          </p>

          <button className={styles.learnMore}>
            Saiba mais <GoArrowUpRight className={styles.icon} size={24} />
          </button>
        </div>

        <div className={`${styles.imageBlock} ${styles.fadeInUp}`}>
          <Image src={soldadorImg} alt='Soldador' width={500} height={500} />
        </div>
      </div>
    </section>
  )
}
