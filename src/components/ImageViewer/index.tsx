import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './OverrideSwiperStyle.css'

import classNames from 'classnames/bind'
import styles from './ImageViewer.module.scss'
import Dimmed from '../shared/Dimmed'

const cx = classNames.bind(styles)

function ImageViewer({
  images,
  open = false,
  selectedImageIndex,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedImageIndex: number
  onClose: () => void
}) {
  if (open === false) {
    return null
  }

  return (
    <Dimmed>
      <CloseButton onClose={onClose} className={cx('close-button')} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedImageIndex}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt="slide images" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Dimmed>
  )
}

function CloseButton({
  onClose,
  className,
}: {
  onClose: () => void
  className: string
}) {
  return (
    <svg
      className={className}
      onClick={onClose}
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <g>
        <path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z" />
        <path d="M64.2422,31.7578a5.9979,5.9979,0,0,0-8.4844,0L48,39.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844L39.5156,48l-7.7578,7.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L48,56.4844l7.7578,7.7578a5.9994,5.9994,0,0,0,8.4844-8.4844L56.4844,48l7.7578-7.7578A5.9979,5.9979,0,0,0,64.2422,31.7578Z" />
      </g>
    </svg>
  )
}

export default ImageViewer
