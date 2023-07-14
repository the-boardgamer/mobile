import React from 'react'

import { AuthContext, type AuthContextInterface } from './context'

export function useAuth(): React.ContextType<typeof AuthContext> {
  return React.useContext(AuthContext) as AuthContextInterface
}
