"use client"

import Header from '@/app/Menu/MenuSection'
import styles from './ServicesSection.module.css'
import { FaTruckPickup, FaWrench, FaPaintRoller } from 'react-icons/fa'
import GallerySection from '../GallerySection/GallerySection'

export default function Services() {
  return (
    <section className={styles.section}>
      <Header />
      <h2 className={styles.title}>
        <span className={styles.bar}></span> Nossas funções e <span className={styles.highlight}>qualidades</span>
      </h2>

      <p className={styles.description}>
        Na nossa função é oferecer soluções robustas, confiáveis e de alta performance para garantir que seus equipamentos estejam sempre em perfeito estado de uso. Confira abaixo os principais serviços que oferecemos.
      </p>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <FaTruckPickup className={styles.icon} />
          <h3>Reformas de Caçambas</h3>
          <p>
            Especializados em reforçar caçambas danificadas, proporcionando maior resistência, segurança e vida útil ao seu equipamento. Nossa missão é entregar soluções que trazem economia e desempenho a longo prazo.
          </p>
        </div>

        <div className={styles.card}>
          <FaWrench className={styles.icon} />
          <h3>Manutenções em Roll-On/Roll-Off</h3>
          <p>
            Realizamos manutenções em sistemas Roll-On/Roll-Off com agilidade e precisão. Sabemos o quanto seu equipamento é essencial para o dia a dia operacional, por isso nossas correções visam reduzir o tempo de parada e o máximo de confiança.
          </p>
        </div>

        <div className={styles.card}>
          <FaPaintRoller className={styles.icon} />
          <h3>Pintura Industrial</h3>
          <p>
            Oferecemos serviços de pintura industrial com acabamentos técnicos e resistência. Aplicamos proteção contra intempéries, ferrugem e abrasão em superfícies metálicas, assegurando uma proteção aprimorada.
          </p>
        </div>
      </div>
      <GallerySection />
    </section>
  )
}
