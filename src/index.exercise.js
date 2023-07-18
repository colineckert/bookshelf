/** @jsx jsx */
import {jsx} from '@emotion/core'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import '@reach/dialog/styles.css'
import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Button, Input, FormGroup, Spinner} from './components/lib'
import {Modal, ModalContents, ModalOpenButton} from './components/modal'
import {Logo} from './components/logo'

function LoginForm({onSubmit, submitButton}) {
  const [isLoading, setIsLoading] = React.useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })

    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  const cssProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    '> div': {
      margin: '10px auto',
      width: '100%',
      maxWidth: '300px',
    },
  }

  return (
    <form onSubmit={handleSubmit} css={cssProps}>
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input id="username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </FormGroup>
      <div>
        {React.cloneElement(submitButton, {type: 'submit'})}
        <Spinner
          css={{
            display: isLoading ? 'inline-block' : 'none',
          }}
        />
      </div>
    </form>
  )
}

function App() {
  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }

  const cssProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
  }

  return (
    <div css={cssProps}>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridGap: '0.75rem',
        }}
      >
        <Modal>
          <ModalOpenButton>
            <Button variant="primary">Login</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Login form" title="Login">
            <LoginForm
              onSubmit={login}
              submitButton={<button variant="primary">Login</button>}
            />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <Button variant="secondary">Register</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Registration form" title="Register">
            <LoginForm
              onSubmit={register}
              submitButton={<button variant="secondary">Register</button>}
            />
          </ModalContents>
        </Modal>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export {root}
