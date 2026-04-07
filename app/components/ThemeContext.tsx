'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { dark, light, Theme } from '../lib/theme'

interface ThemeContextType {
  t: Theme
  isDark: boolean
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextType>({ t: dark, isDark: true, toggle: () => {} })

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('dk-theme')
    if (saved) setIsDark(saved === 'dark')
  }, [])

  const toggle = () => setIsDark(prev => {
    const next = !prev
    localStorage.setItem('dk-theme', next ? 'dark' : 'light')
    return next
  })

  const t = isDark ? dark : light

  if (!mounted) {
    return <div style={{ minHeight: '100vh', background: dark.bg }}>{children}</div>
  }

  return (
    <ThemeContext.Provider value={{ t, isDark, toggle }}>
      <div style={{ minHeight: '100vh', background: t.bg, color: t.text, transition: 'background 0.2s, color 0.2s' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
