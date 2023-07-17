import React from 'react'

import { AuthContext, type AuthContextInterface } from './context'

export function useAuth(): AuthContextInterface {
  const userAuthContext = React.useContext(AuthContext)

  if (userAuthContext === null)
    throw new Error('useAuth has to be used within <AuthContext.Provider>')
  return userAuthContext
}
