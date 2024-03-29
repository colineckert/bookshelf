// 🐨 you're gonna need this stuff:
import React from 'react'
import {render, screen, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Modal, ModalContents, ModalOpenButton} from '../modal'

test('can be opened and closed', async () => {
  const label = 'Modal label'
  const title = 'Modal Title'
  const content = 'Modal content'
  // 🐨 render the Modal, ModalOpenButton, and ModalContents
  render(
    <Modal>
      <ModalOpenButton>
        <button>Open</button>
      </ModalOpenButton>
      <ModalContents aria-label={label} title={title}>
        <div>{content}</div>
      </ModalContents>
    </Modal>,
  )
  // 🐨 click the open button
  await userEvent.click(screen.getByRole('button', {name: /open/i}))
  // 🐨 verify the modal contains the modal contents, title, and label
  const modal = screen.getByRole('dialog')
  expect(modal).toHaveAttribute('aria-label', 'Modal label')
  const inModal = within(modal)
  expect(
    inModal.getByRole('heading', {name: /modal title/i}),
  ).toBeInTheDocument()
  // 🐨 click the close button
  await userEvent.click(inModal.getByRole('button', {name: /close/i}))
  // 🐨 verify the modal is no longer rendered
  // 💰 (use `query*` rather than `get*` or `find*` queries to verify it is not rendered)
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  // 💰 Remember all userEvent utils are async, so you need to await them.
})
