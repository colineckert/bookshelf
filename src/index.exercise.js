import React from 'react'
import {createRoot} from 'react-dom/client'
import {Logo} from 'components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements
    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  )
}

function App() {
  const [showModal, setShowModal] = React.useState('none')

  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setShowModal('login')}>Login</button>
        <Dialog aria-label="Login form" isOpen={showModal === 'login'}>
          <button onClick={() => setShowModal('none')}>Close</button>
          <h3>Login</h3>
          <LoginForm onSubmit={login} buttonText="Login" />
        </Dialog>
      </div>
      <div>
        <button onClick={() => setShowModal('register')}>Register</button>
        <Dialog aria-label="Register form" isOpen={showModal === 'register'}>
          <button onClick={() => setShowModal('none')}>Close</button>
          <h3>Register</h3>
          <LoginForm onSubmit={register} buttonText="Register" />
        </Dialog>
      </div>
    </div>
  )
}

const rootNode = document.getElementById('root')
createRoot(rootNode).render(<App />)
export {rootNode}
