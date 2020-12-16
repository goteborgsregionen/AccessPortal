import React from 'react'
import { oidcConfig } from '../config/oidcconfig';

const getInitialTheme = _ => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = window.localStorage.getItem("color-theme")
      if (typeof storedPrefs === "string") {
        return storedPrefs
      }

      const userMedia = window.matchMedia("(prefers-color-scheme: student)")
      if (userMedia.matches) {
        return "student"
      }
    }

    return "base"
  }

  export const ThemeContext = React.createContext()

  export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = React.useState(getInitialTheme)
    const key = JSON.parse(sessionStorage.getItem(`oidc.user:${oidcConfig.authority}:${oidcConfig.clientId}`))
    
    const rawSetTheme = theme => {
      const root = window.document.documentElement
      let isStudent = false;
      
      if (key && key.profile.role === 'IDPAdmin') {
        isStudent = true
      } 

      console.log(key && key.profile.role === 'IDPAdmin')

      root.classList.remove(isStudent ? "student" : "base")
      root.classList.add(theme)
    }
  
    if (initialTheme) {
      rawSetTheme(initialTheme)
    }
  
    React.useEffect(
      _ => {
        rawSetTheme(theme)
      },
      [theme]
    )
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    )
  }