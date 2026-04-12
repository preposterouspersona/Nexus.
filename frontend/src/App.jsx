import React from 'react'
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/clerk-react'

const App = () => {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton mode="modal" />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </>
  )
}

export default App