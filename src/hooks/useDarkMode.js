import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage('dark-mode')
  useEffect(() => {
    const body = window.document.body
    value ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
  }, [value])
  return [value, setValue]
}
