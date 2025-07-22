"use client"

import styles from './LocationSection.module.css'
import { useRef, useEffect, useState } from 'react'

export default function LocationSection() {
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
            className={`${styles.locationSection} ${isVisible ? styles.fadeIn : ''}`}
        >
            <h2 className={styles.locationTitle}>Nossa localização</h2>

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

            <p className={styles.addressText}>
                Endereço: Rod. Campinas-Mogi Mirim, 136, Jaguariúna - SP, 13820-000
            </p>

            <a
                href="https://www.google.com/maps/place/MS+Manuten%C3%A7%C3%B5es/@-22.6576713,-47.0045017,17z/data=!4m14!1m7!3m6!1s0x94c8e9d4e6bc389d:0xff9bc30350615373!2zTVMgTWFudXRlbsOnw7Vlcw!8m2!3d-22.6578!4d-47.0044913!16s%2Fg%2F11x1nwjw37!3m5!1s0x94c8e9d4e6bc389d:0xff9bc30350615373!8m2!3d-22.6578!4d-47.0044913!16s%2Fg%2F11x1nwjw37?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapButton}
            >
                Ver no Google Maps →
            </a>
        </section>
    )
}
