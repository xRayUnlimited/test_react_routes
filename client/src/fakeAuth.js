export const login = () => {
  localStorage.setItem('isAuthenticated', 'true')
}

export const logout = () => {
  localStorage.removeItem('isAuthenticated')
}

export const isAuthenticated = () => {
  return localStorage.isAuthenticated
}