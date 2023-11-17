// 🐨 create and export a React context variable for the AuthContext
// 💰 using React.createContext
import React from 'react'

const AuthContext = React.createContext()

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthContext provider')
  }
  return context
}

export {AuthContext, useAuth}
