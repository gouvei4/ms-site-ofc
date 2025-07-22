"use client"

import styles from './HeroSection.module.css'
import Image from 'next/image'
import Header from '../Menu/MenuSection'
import soldadorImg from '../../../public/soldador.png'
import setaImg from '../../../public/arrow.png'
import { GoArrowUpRight } from 'react-icons/go'
import { useEffect, useRef, useState } from 'react'

export default function HeroSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
      <Header />
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.subtitle}>Olá, somos a MS Manutenções</p>
          <h2 className={styles.title}>
            Te <span className={styles.highlight}>ajudando</span> a superar desafios no dia a dia
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

        <div className={styles.imageBlock}>
          <Image src={soldadorImg} alt='Soldador' width={500} height={500} />
        </div>
      </div>
    </section>
  )
}
