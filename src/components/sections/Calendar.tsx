import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import classNames from 'classnames/bind'
import Section from '../shared/Section'
import { DayPicker } from 'react-day-picker'

import 'react-day-picker/dist/style.css'
import styles from './Calendar.module.scss'

const cx = classNames.bind(styles)

const overrideDayPickerCss = `
.rdp-caption{
    display: none
}

.rdp-cell{
    cursor: default;
}

.rdp-head_cell{
    font-weight: bold;
    font-size:18px;
}

.rdp-day_selected{
    background-color: var(--red);
    font-weight: bold;
    color:#fff;
}

.rdp-day_selected:hover{
    background-color: var(--red);
}
`

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('text-date')}>
            {format(weddingDate, 'yyyy년 M월 d일')}
          </span>
          <span className={cx('text-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{overrideDayPickerCss}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default Calendar
