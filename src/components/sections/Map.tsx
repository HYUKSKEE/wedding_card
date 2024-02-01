import classNames from 'classnames/bind'
import styles from './Map.module.scss'
import Section from '../shared/Section'
import { useEffect, useRef } from 'react'
import { Location } from '@ /models/wedding'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    kakao: any
  }
}

function Map({ location }: { location: Location }) {
  const mapContainer = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`
    //비동기로 불러오기
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const options = {
          center: position,
          level: 3,
        }

        const map = new window.kakao.maps.Map(mapContainer.current, options)
        const marker = new window.kakao.maps.Marker({
          position: position,
        })
        marker.setMap(map)
      })
    }
  }, [location])

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('text-title')}>오시는길</span>
          <span className={cx('text-subtitle')}>{location.name}</span>
          <span className={cx('text-subtitle')}>{location.address}</span>
        </div>
      }
    >
      <div className={cx('wrap-map')}>
        <div ref={mapContainer} className={cx('map')}></div>

        <a
          className={cx('button-find-way')}
          href={location.link}
          target="_blank"
          rel="noreferrer"
        >
          길찾기
        </a>
      </div>
      <div>
        <WayToCome label="버스" list={location.waytocome.bus} />
        <WayToCome label="지하철" list={location.waytocome.metro} />
      </div>
    </Section>
  )
}

function WayToCome({
  label,
  list,
}: {
  label: React.ReactNode
  list: string[]
}) {
  return (
    <div className={cx('wrap-way-to-come')}>
      <div className={cx('text-label')}>{label}</div>
      <ul>
        {list.map((WayToCome, index) => (
          <li key={index}>{WayToCome}</li>
        ))}
      </ul>
    </div>
  )
}

export default Map
