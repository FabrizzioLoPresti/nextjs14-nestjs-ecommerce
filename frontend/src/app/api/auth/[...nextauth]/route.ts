import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { GithubProfileType } from "@/types/types"

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? ""
    })
  ],
  callbacks: {
    async signIn({ profile }) {
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
        console.log("Response status:", response.status);
        console.log("Response data:", responseData);

        if (!response.ok && response.status !== 404) {
          throw new Error(responseData.message)
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