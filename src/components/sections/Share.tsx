import classNames from 'classnames/bind'
import styles from './Share.module.scss'
import Section from '../shared/Section'
import { useEffect } from 'react'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import CopyToClipboard from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    Kakao: any
  }
}

interface ShareProps {
  groomName: string
  brideName: string
  date: string
}

function Share({ groomName, brideName, date }: ShareProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js`
    //비동기로 불러오기
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
      }
    }
  }, [])

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${groomName} 🧡 ${brideName}`,
        description: `${format(parseISO(date), 'M월 d일 eeee h시', {
          locale: ko,
        })}`,
        imageUrl:
          'https://img.freepik.com/free-vector/bride-and-groom-getting-married_52683-32276.jpg?w=740&t=st=1706767043~exp=1706767643~hmac=bfbda308e11bc22ba4fd872a8dd63ecfcae6cf9f257de31762b5dfe65e4f1471',
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    })
  }

  return (
    <Section title="공유하기">
      <div className={cx('wrap-share')}>
        <button onClick={handleShareKakao}>
          <IconKakao />
        </button>
        <CopyToClipboard
          text={window.location.origin}
          onCopy={() => {
            alert('복사가 완료되었습니다.')
          }}
        >
          <button>
            <IconClipboard />
          </button>
        </CopyToClipboard>
      </div>
    </Section>
  )
}

function IconKakao() {
  return (
    <svg version="1.1" viewBox="0 0 135.46666 135.46667">
      <defs id="defs2" />
      <g id="layer1">
        <circle
          cx="67.73333"
          cy="67.73333"
          id="path850"
          r="67.73333"
          style={{
            fill: '#ffe227',
            strokeWidth: 0.132292,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            stroke: 'none',
            fillOpacity: 1,
          }}
        />
        <g
          id="g1000"
          style={{ strokeWidth: 0.938309 }}
          transform="matrix(1.0657475,0,0,1.0657475,-4.4532963,-4.4532983)"
        >
          <path
            d="M 67.594373,28.816763 A 42.191248,33.485241 0 0 0 25.542208,62.301837 42.191248,33.485241 0 0 0 44.655432,90.333198 c -1.925815,6.013156 -4.736875,15.417782 -3.717475,16.247782 1.083839,0.88245 12.715951,-6.914279 19.147596,-11.348434 a 42.191248,33.485241 0 0 0 7.647776,0.555096 42.191248,33.485241 0 0 0 42.191121,-33.485805 42.191248,33.485241 0 0 0 -42.191121,-33.485074 42.191248,33.485241 0 0 0 -0.13895,0 z"
            id="path900"
            style={{
              fill: '#1a1a1a',
              stroke: 'none',
              strokeWidth: 0.124131,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
            }}
          />
          <g
            id="g962"
            style={{ strokeWidth: 0.615119 }}
            transform="matrix(1.5254102,0,0,1.5254102,-37.735311,-33.441939)"
          >
            <path
              d="m 182.63281,207.49609 c -3.60965,0 -6.51562,2.90598 -6.51562,6.51563 v 0.0254 c 0,3.60965 2.90597,6.51562 6.51562,6.51562 h 10.18164 v 39.1836 c 0,3.61653 2.91276,6.52734 6.5293,6.52734 3.61654,0 6.52734,-2.91081 6.52734,-6.52734 v -39.1836 h 10.4668 c 3.60965,0 6.51563,-2.90597 6.51563,-6.51562 v -0.0254 c 0,-3.60965 -2.90598,-6.51563 -6.51563,-6.51563 h -16.99414 z"
              id="rect910"
              style={{
                fill: '#ffe227',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.307561,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
              }}
              transform="scale(0.26458333)"
            />
            <path
              d="m 237.28906,207.47461 a 7.6489301,7.6489301 0 0 0 -2.01367,0.26953 c -2.32898,0.27299 -4.42527,1.79364 -5.32812,4.14258 l -17.51954,45.57617 c -1.29753,3.37576 0.37621,7.13802 3.75196,8.43555 3.37575,1.29752 7.13801,-0.37424 8.43554,-3.75 l 2.6543,-6.90821 h 20.32227 l 2.65625,6.90821 c 1.29753,3.37576 5.0598,5.04752 8.43554,3.75 3.37576,-1.29753 5.04753,-5.05979 3.75,-8.43555 l -17.51757,-45.57617 c -0.95632,-2.48803 -3.25162,-4.04521 -5.74414,-4.17578 a 7.6489301,7.6489301 0 0 0 -1.88282,-0.23633 z m 0.14258,21.33008 5.14258,13.3789 h -10.28516 z"
              id="rect923"
              style={{
                fill: '#ffe227',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.307561,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
              }}
              transform="scale(0.26458333)"
            />
            <path
              d="m 273.00391,207.49609 c -3.68524,0 -6.65039,2.96711 -6.65039,6.65235 v 45.46289 c 0,3.68524 2.96515,6.65234 6.65039,6.65234 h 20.15234 c 3.68524,0 6.65234,-2.9671 6.65234,-6.65234 0,-3.68524 -2.9671,-6.65235 -6.65234,-6.65235 h -13.5 v -38.81054 c 0,-3.68524 -2.96711,-6.65235 -6.65234,-6.65235 z"
              id="rect941"
              style={{
                fill: '#ffe227',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.307561,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
              }}
              transform="scale(0.26458333)"
            />
            <path
              d="m 308.91602,207.49609 c -3.68524,0 -6.65235,2.96711 -6.65235,6.65235 v 45.46289 c 0,3.68524 2.96711,6.65234 6.65235,6.65234 3.68523,0 6.65039,-2.9671 6.65039,-6.65234 v -13.96485 c 0.0686,-0.0646 0.14056,-0.12337 0.20703,-0.1914 l 2.32031,-2.375 15.47461,20.5625 c 2.21592,2.94463 6.36984,3.53231 9.31445,1.3164 2.94461,-2.2159 3.53038,-6.37177 1.31446,-9.3164 l -16.69922,-22.18946 14.0625,-14.39453 c 2.57528,-2.63607 2.52695,-6.83308 -0.10743,-9.41015 -2.63434,-2.57704 -6.82901,-2.52866 -9.40429,0.10742 l -16.48242,16.87109 v -12.47851 c 0,-3.68524 -2.96516,-6.65235 -6.65039,-6.65235 z"
              id="rect945"
              style={{
                fill: '#ffe227',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.307561,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
              }}
              transform="scale(0.26458333)"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

function IconClipboard() {
  return (
    <svg version="1.1" viewBox="0 0 18 22">
      <title />
      <desc />
      <defs />
      <g fill="none" stroke="none" strokeWidth="1">
        <g
          fill="#000000"
          id="Core"
          transform="translate(-171.000000, -127.000000)"
        >
          <g id="content-paste" transform="translate(171.000000, 127.000000)">
            <path
              d="M16,2 L11.8,2 C11.4,0.8 10.3,0 9,0 C7.7,0 6.6,0.8 6.2,2 L2,2 C0.9,2 0,2.9 0,4 L0,20 C0,21.1 0.9,22 2,22 L16,22 C17.1,22 18,21.1 18,20 L18,4 C18,2.9 17.1,2 16,2 L16,2 Z M9,2 C9.6,2 10,2.4 10,3 C10,3.6 9.6,4 9,4 C8.4,4 8,3.6 8,3 C8,2.4 8.4,2 9,2 L9,2 Z M16,20 L2,20 L2,4 L4,4 L4,7 L14,7 L14,4 L16,4 L16,20 L16,20 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Share
