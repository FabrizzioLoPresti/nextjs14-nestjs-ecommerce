import NextAuth, { Session, User } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { GithubProfileType } from "@/types/types"
import { JWT } from "next-auth/jwt"

const handler = NextAuth({
  providers: [
    GithubProvider({
      name: "GitHub",
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    })
  ],
  callbacks: {
    async signIn({ user, profile }) {
      const { name, login, email } = profile as GithubProfileType

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, username: login, email })
        })

        const responseData = await response.json();

        if (!response.ok && response.status !== 404) {
          throw new Error(responseData.message)
        }

        if (response.ok) {
          user.id = responseData.id
        }
      } catch (error) {
        console.log(error)
        return false
      }

      return true
    },
  }
})

export { handler as GET, handler as POST }