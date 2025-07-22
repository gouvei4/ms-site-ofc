"use client"

import styles from './ServicesSection.module.css'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import reformaImG from '../../../public/service1.png'
import reformaImG2 from '../../../public/service2.png'

export default function ServicesSection() {
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
    <section ref={sectionRef} className={styles.section}>
      <h2 className={styles.subtitle}>
        Nossos <span className={styles.highlight}>Serviços</span>
      </h2>

      <div className={`${styles.content} ${isVisible ? styles.fadeIn : ''}`}>
        <div className={styles.item}>
          <Image
            src={reformaImG}
            alt='Reforma de caçambas'
            width={300}
            height={300}
            className={styles.image}
          />
          <h3 className={styles.itemTitle}>Reformas de caçambas</h3>
          <p className={styles.itemDescription}>
            Reforçamos caçambas <br />
            danificadas, garantindo mais <br />
            resistência, segurança e vida útil <br />
            para seu equipamento.
          </p>
          <button className={styles.button}>
            Saiba mais <GoArrowUpRight />
          </button>
        </div>

        <div className={styles.item}>
          <Image
            src={reformaImG2}
            alt='Manutenção Roll-on Roll-off'
            width={300}
            height={300}
            className={styles.image}
          />
          <h3 className={styles.itemTitle}>Manutenção em Roll/on off</h3>
          <p className={styles.itemDescription}>
            Manutenção em Roll-On/Roll-Off <br /> com agilidade e confiança para{' '}
            <br />
            seu equipamento estar sempre <br />
            pronto.
          </p>
          <button className={styles.button}>
            Saiba mais <GoArrowUpRight />
          </button>
        </div>

        <div className={styles.item}>
          <Image
            src={reformaImG}
            alt='Pintura industrial'
            width={300}
            height={300}
            className={styles.image}
          />
          <h3 className={styles.itemTitle}>Pinturas</h3>
          <p className={styles.itemDescription}>
            Pinturas industriais com <br />
            acabamento durável e proteção <br />
            reforçada para seus <br />
            equipamentos.
          </p>
          <button className={styles.button}>
            Saiba mais <GoArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  )
}
