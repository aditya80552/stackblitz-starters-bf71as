import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Here you would usually fetch the user from a db
        if (credentials?.email === "user@example.com" && credentials?.password === "password") {
          return { id: 1, name: "J Smith", email: "user@example.com" }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
})