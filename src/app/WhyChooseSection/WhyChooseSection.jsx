"use client"

import styles from './WhyChooseSection.module.css'
import { FaShieldAlt, FaBolt, FaHardHat, FaMedal } from 'react-icons/fa'
import { useRef, useEffect, useState } from 'react'

export default function WhyChooseSection() {
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
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.fadeIn : ''}`}
    >
      <h2 className={styles.subtitle}>
        Por que escolher a <span className={styles.highlight}>MS&nbsp;Manutenções?</span>
      </h2>

      <div className={styles.features}>
        <div className={styles.feature}>
          <FaShieldAlt size={50} color='#000'/>
          <div className={styles.featureTitle}>Garantia de Serviço</div>
          <div className={styles.featureText}>
            Realizamos serviços com garantia comprovada, assegurando o melhor resultado para sua operação.
          </div>
        </div>

        <div className={styles.feature}>
          <FaBolt size={50} color='#000'/>
          <div className={styles.featureTitle2}>Atendimento Ágil</div>
          <div className={styles.featureText}>
            Compromisso com prazos rápidos e atendimento eficiente para não parar sua produção.
          </div>
        </div>

        <div className={styles.feature}>
          <FaHardHat size={50} color='#000'/>
          <div className={styles.featureTitle3}>Equipe Especializada</div>
          <div className={styles.featureText}>
            Técnicos altamente qualificados com experiência em manutenção de equipamentos pesados.
          </div>
        </div>

        <div className={styles.feature}>
          <FaMedal size={50} color='#000'/>
          <div className={styles.featureTitle4}>Qualidade Certificada</div>
          <div className={styles.featureText}>
            Aplicamos processos que seguem normas técnicas e padrões de qualidade reconhecidos.
          </div>
        </div>
      </div>
    </section>
  )
}
