import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBtzCP59uEHqAB3DX4k3jfGRIXZBSiRb9g',
  authDomain: 'sign-in-and-out-practice.firebaseapp.com',
  projectId: 'sign-in-and-out-practice',
  storageBucket: 'sign-in-and-out-practice.appspot.com',
  messagingSenderId: '197081177133',
  appId: '1:197081177133:web:d6b1cf0f47a0d2026faca4',
}

initializeApp(firebaseConfig)
const auth = getAuth()

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function logout() {
  return signOut(auth)
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub
  }, [])

  return currentUser
}
