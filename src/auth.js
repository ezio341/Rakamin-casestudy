const JWTAuthProvider = {
  isAuthenticated: false,
  signin({email, password}, callback) {
    JWTAuthProvider.isAuthenticated = true
    setTimeout(callback, 100)
    return fetch(process.env.BASE_API+'/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email, password
      })
    })
  },
  signout(callback) {
    JWTAuthProvider.isAuthenticated = false
    setTimeout(callback, 100)
  },
}

export { JWTAuthProvider }