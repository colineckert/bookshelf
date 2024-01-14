import {formatDate} from '../misc'

test('formatDate formats the date to look nice', () => {
  let date = new Date('2024-01-20')
  expect(formatDate(date)).toBe('Jan 24')
  date = new Date('March 22, 1991')
  expect(formatDate(date)).toBe('Mar 91')
})
