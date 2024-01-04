import { useEffect, useState } from 'react'
import './App.css'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import FullScreenMessage from './components/shared/FullScreenMessage'

import { Wedding } from './models/wedding'
import Video from './components/sections/Video'
import Heading from './components/sections/Heading'

const cx = classNames.bind(styles)

function App() {
  const [weddingData, setWeddingData] = useState<Wedding | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (res.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }

        return res.json()
      })
      .then((data) => {
        setWeddingData(data)
      })
      .catch((e) => {
        console.log('error >>', e)
        setError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <FullScreenMessage type="loading" />
  }

  if (error) {
    return <FullScreenMessage type="error" />
  }

  if (weddingData == null) {
    return
  }

  const { date } = weddingData

  //test
  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      {JSON.stringify(weddingData)}
    </div>
  )
}

export default App
