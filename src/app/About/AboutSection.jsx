"use client"

import styles from './SobreSection.module.css'
import Image from 'next/image'
import sobreImg from '../../../public/sobre.png'
import { GoArrowUpRight } from 'react-icons/go'
import { useRef, useState, useEffect } from 'react'

export default function AboutSection() {
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
    <section ref={sectionRef} className={`${styles.sobre} ${isVisible ? styles.fadeIn : ''}`}>
      <h2 className={styles.subtitle}>
        Sobre a <span className={styles.highlight}>MS Manutenções</span>
      </h2>

      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src={sobreImg}
            alt="Galpão MS Manutenções"
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <p>
            A MS MANUTENÇÕES é especializada na manutenção e <br />
            recuperação de equipamentos Roll On/Roll Off, caçambas <br />
            estacionárias, julietas e outros sistemas metálicos utilizados no <br />
            transporte e na logística pesada.
          </p>
          <p>
            Na MS MANUTENÇÕES, o seu equipamento volta a operar com <br />
            total segurança e eficiência.
          </p>

          <button className={styles.button}>
            Saiba mais <GoArrowUpRight className={styles.icon} />
          </button>
        </div>
      </div>
    </section>
  )
}
