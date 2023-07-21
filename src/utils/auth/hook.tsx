import React from 'react'

import { AuthContext, type AuthContextType } from './context'

export function useAuth(): AuthContextType {
  const userAuthContext = React.useContext(AuthContext)

  if (userAuthContext === null)
    throw new Error('useAuth has to be used within <AuthContext.Provider>')
  return userAuthContext
}
