import { supabase } from './supabase'

export async function getSession() {
  if (!supabase) return null

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return session
}

export function onAuthStateChange(callback) {
  if (!supabase) {
    return {
      data: {
        subscription: {
          unsubscribe() {},
        },
      },
    }
  }

  return supabase.auth.onAuthStateChange((_event, session) => {
    callback(session)
  })
}

export async function signInWithPassword(email, password) {
  if (!supabase) {
    throw new Error('Supabase is not configured.')
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw error
}

export async function signOut() {
  if (!supabase) return
  await supabase.auth.signOut()
}
