"use client"

import styles from './MissionSection.module.css'
import { FaRocket, FaLightbulb, FaCog } from 'react-icons/fa'
import Footer from '../../Footer/Footer'
import { useEffect, useRef, useState } from 'react'

export default function MissionSection() {
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
        <section ref={sectionRef} className={`${styles.section} ${isVisible ? styles.fadeIn : ''}`}>
            <h2 className={styles.title}>
                <span className={styles.bar}></span> Nossos Pilares: <span className={styles.highlight}>Missão, Visão e Valores</span>
            </h2>
            <div className={styles.missionsContainer}>
                <div className={styles.card}>
                    <FaRocket className={styles.icon} />
                    <p>
                        Proporcionar soluções de excelência em manutenção, recuperação e reformas de equipamentos metálicos para transporte e logística pesada, garantindo segurança, durabilidade e eficiência aos nossos clientes. Trabalhamos para contribuir com o desempenho sustentável das operações industriais, sempre com foco na qualidade e na confiança.
                    </p>
                </div>

                <div className={styles.cardRight}>
                    <p className={styles.text2}>
                        Ser reconhecida como referência no setor de manutenção e recuperação de equipamentos metálicos no Brasil, destacando-se pela inovação, responsabilidade técnica e compromisso com os resultados dos nossos parceiros e clientes.
                    </p>
                    <FaLightbulb className={styles.icon} />
                </div>

            </div>

            <div className={styles.values}>
                <div>
                    <FaCog className={styles.icon} />
                </div>
                <ul className={styles.list}>
                    <li><strong>Qualidade:</strong> Serviços com rigor técnico e atenção aos detalhes.</li>
                    <li><strong>Segurança:</strong> Prioridade em todas as operações.</li>
                    <li><strong>Transparência:</strong> Honestidade e clareza nas relações.</li>
                    <li><strong>Sustentabilidade:</strong> Preservação de recursos e reaproveitamento consciente.</li>
                    <li><strong>Inovação:</strong> Evolução contínua de métodos e soluções.</li>
                    <li><strong>Valorização das Pessoas:</strong> Desenvolvimento e bem-estar da equipe.</li>
                    <li><strong>Parceria:</strong> Relações sólidas baseadas na confiança.</li>
                </ul>
            </div>

            <button className={styles.button}>Fale conosco</button>
            <Footer />
        </section>
    )
}
