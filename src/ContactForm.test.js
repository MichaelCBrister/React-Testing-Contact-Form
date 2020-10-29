import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils'

test('renders form without errors', () => {
  render(<ContactForm/>)
})
test('inputs fields exist and are functional',async () => {
  render(<ContactForm/>)
  const firstName = screen.getByLabelText(/first name*/i)
  const lastName = screen.getByLabelText(/last name*/i)
  const email = screen.getByLabelText(/email*/i)
  const message = screen.getByLabelText(/message/i)

  act( () => {
    fireEvent.change(firstName, {target:{value: 'Michael'}})
  })
  expect(firstName).toHaveValue('Michael')
  act(() => {
    fireEvent.change(lastName, {target:{value: 'Brister'}})
  })
  expect(lastName).toHaveValue('Brister')
  act(() => {
    fireEvent.change(email, {target:{value: 'person@website.com'}})
  })
  expect(email).toHaveValue('person@website.com')
  act(() => {
    fireEvent.change(message, {target:{value: 'message'}})
  })
  expect(message).toHaveValue('message')
  act(() => {
    fireEvent.click(screen.getByRole('button'))
  })
})