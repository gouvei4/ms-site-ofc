"use client"

import styles from './AboutHistory.module.css'
import Image from 'next/image'
import galpaoImg from '@/../public/sobre2.png'
import Header from '../../Menu/MenuSection'
import MissionSection from '../AboutMission/MissionSection'
import { useEffect, useRef, useState } from 'react'

export default function AboutHistory() {
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
    <section ref={sectionRef} className={`${styles.aboutSection} ${isVisible ? styles.fadeIn : ''}`}>
      <Header />

      <h2 className={styles.title}>
        <span className={styles.bar}></span> Sobre a <span className={styles.highlight}>MS Manutenções</span>
      </h2>

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p>
            A MS MANUTENÇÕES nasceu em janeiro de 2025 com o propósito de oferecer soluções especializadas em manutenção, recuperação e reformas de equipamentos essenciais para o transporte e a logística pesada. Localizada estrategicamente em Jaguariúna-SP, na Rodovia Campinas-Mogi Mirim, a empresa foi fundada por profissionais experientes que identificaram uma lacuna no mercado: a necessidade de serviços de alta qualidade que garantam o pleno funcionamento e a longevidade de equipamentos metálicos utilizados no setor.
          </p>
          <p>
            Desde a sua fundação, a MS MANUTENÇÕES se dedica à excelência no atendimento e à entrega de soluções personalizadas para cada cliente. O compromisso com a segurança, a eficiência e a integridade dos equipamentos sempre foi o pilar central da empresa. Por isso, cada serviço prestado, seja na manutenção de sistemas Roll On/Roll Off, recuperação de caçambas estacionárias, reformas de julietas ou pinturas industriais, é conduzido com o mais alto padrão de qualidade e por uma equipe altamente qualificada.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image src={galpaoImg} alt="Galpão MS Manutenções" className={styles.image} />

          <div className={styles.textBlock}>
            <p>
              Além do conhecimento técnico, a empresa investe constantemente em aprimoramento de processos, inovação em técnicas de recuperação e no uso de materiais de alto desempenho. O objetivo é simples: fazer com que cada equipamento atendido volte a operar como novo, garantindo o desempenho ideal nas operações industriais, ambientais e de transporte pesado.
            </p>
            <p>
              Com uma trajetória marcada por dedicação e profissionalismo, a MS MANUTENÇÕES não apenas oferece serviços, mas também constrói parcerias de confiança com seus clientes, contribuindo diretamente para a produtividade e a segurança das operações logísticas em toda a região.
            </p>
          </div>
        </div>
      </div>
      <MissionSection />
    </section>
  )
}
