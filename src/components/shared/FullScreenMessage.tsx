import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface FullscreenMessageType {
  type: 'loading' | 'error'
}

function FullScreenMessage({ type }: FullscreenMessageType) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? <LoadingIcon /> : <ErrorIcon />}
    </div>
  )
}

function LoadingIcon() {
  return (
    <svg
      className={cx('icon-loading')}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" />
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg
      className={cx('icon-error')}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <path d="M479,447.77,268.43,56.64a8,8,0,0,0-14.09,0L43.73,447.77a8,8,0,0,0,7.05,11.79H472A8,8,0,0,0,479,447.77ZM281.38,411.48h-40v-40h40Zm-4-63.92h-32l-6-160h44Z" />
    </svg>
  )
}

export default FullScreenMessage
