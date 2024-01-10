import classNames from 'classnames/bind'
import styles from './ImageGallery.module.scss'

import Section from '../shared/Section'
import ImageViewer from '../ImageViewer'
import { useState } from 'react'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1)

  const open = selectedImageIndex > -1

  const handleSelectedImage = (idx: number) => {
    setSelectedImageIndex(idx)
  }

  const handleClose = () => {
    setSelectedImageIndex(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((url, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => handleSelectedImage(idx)}
            >
              <img src={url} alt="images" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedImageIndex={selectedImageIndex}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
