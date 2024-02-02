import { useModalContext } from '../../contexts/ModalContext'
import { Wedding } from '@ /models/wedding'
import { useEffect, useRef } from 'react'

function AttendCountModal({ weddingData }: { weddingData: Wedding }) {
  const { open, close } = useModalContext()

  const $input = useRef<HTMLInputElement>(null)

  const haveSeenModal = localStorage.getItem('@have-seen-modal')

  useEffect(() => {
    if (haveSeenModal === 'true') {
      return
    }
    console.log('attendCount')
    open({
      title: `현재 참석자: ${weddingData.attendCount} 명`,
      body: (
        <div>
          <input
            ref={$input}
            placeholder="참석 가능 인원을 추가해주세요."
            style={{ width: '100%' }}
            type="number"
          />
        </div>
      ),
      onLeftButtonClick: () => {
        localStorage.setItem('@have-seen-modal', 'true')
        close()
      },
      onRightButtonClick: () => {
        if ($input.current == null) {
          return
        }

        fetch('http://localhost:8888/wedding', {
          method: 'PUT',
          body: JSON.stringify({
            ...weddingData,
            attendCount: weddingData.attendCount + Number($input.current.value),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        localStorage.setItem('@have-seen-modal', 'true')
        close()
      },
    })
  }, [])

  return null
}

export default AttendCountModal