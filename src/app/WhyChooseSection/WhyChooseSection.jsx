import styles from './WhyChooseSection.module.css'
import { FaShieldAlt, FaBolt, FaHardHat, FaMedal } from 'react-icons/fa'

export default function WhyChooseSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Por que escolher a <span className={styles.highlight}>MS Manutenções?</span>
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
          <div className={styles.featureTitle}>Atendimento Ágil</div>
          <div className={styles.featureText}>
            Compromisso com prazos rápidos e atendimento eficiente para não parar sua produção.
          </div>
        </div>

        <div className={styles.feature}>
          <FaHardHat size={50} color='#000'/>
          <div className={styles.featureTitle}>Equipe Especializada</div>
          <div className={styles.featureText}>
            Técnicos altamente qualificados com experiência em manutenção de equipamentos pesados.
          </div>
        </div>

        <div className={styles.feature}>
          <FaMedal size={50} color='#000'/>
          <div className={styles.featureTitle}>Qualidade Certificada</div>
          <div className={styles.featureText}>
            Aplicamos processos que seguem normas técnicas e padrões de qualidade reconhecidos.
          </div>
        </div>
      </div>
    </section>
  )
}
