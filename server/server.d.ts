export {}

declare global {
  namespace Express {
    interface User {
      id?: number
      username: string
      password: string
      email: string
      googleId: string
      githubId: string
    }
  }
}
