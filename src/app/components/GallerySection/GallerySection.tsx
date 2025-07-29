"use client"

import styles from './GallerySection.module.css'
import Slider from 'react-slick'
import Image from 'next/image'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Footer from '@/app/Footer/Footer'

function PrevArrow(props: any) {
  const { onClick } = props
  return (
    <div className={`${styles.arrow} ${styles.left}`} onClick={onClick}>
      <FaChevronLeft />
    </div>
  )
}

function NextArrow(props: any) {
  const { onClick } = props
  return (
    <div className={`${styles.arrow} ${styles.right}`} onClick={onClick}>
      <FaChevronRight />
    </div>
  )
}

export default function GallerySection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }

  const imagens = [
    '/ccbv.jpg',
    '/ccbv2.jpg',
    '/ccbv3.jpg',
    '/novaC.jpg',
    '/novaC2.jpg',
    '/novaC3.jpg',
  ]

  return (
    <section className={styles.section}>
            <h2 className={styles.title}>
        <span className={styles.bar}></span> Conheça nossos principais <span className={styles.highlight}>Serviços</span>
      </h2>

      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {imagens.map((src, index) => (
            <div key={index} className={styles.slide}>
              <Image src={src} alt={`Serviço ${index + 1}`} width={300} height={300} className={styles.image} />
            </div>
          ))}
        </Slider>
      </div>

      <button className={styles.button}>
        Saiba mais <FaArrowRight />
      </button>
      <Footer />
    </section>
  )
}
