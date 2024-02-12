import { authAPI } from "@/redux/auth/authAPI";
import { store } from "@/redux/store";
import { SignUpInfo } from "@/types/authTypes";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handleOAuthServerReq = async (credentials: SignUpInfo) => {
  try {
    const result: any = await store.dispatch(
      authAPI.endpoints.handleOAuthSignUp.initiate(credentials!)
    );
    if (result.error) {
      throw new Error(JSON.stringify(result?.error?.message));
    } else if (result?.data?.user) {
      return result?.data?.user;
    } else {
      throw new Error(
        JSON.stringify("Something wrong here. Please try again later")
      );
    }
  } catch (error: any) {
    throw new Error(JSON.stringify(error.message));
  }
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "signup-provider",
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any, req) {
        const { id, name, email, role } = credentials;
        return { id, name, email, role };
      },
    }),

    CredentialsProvider({
      id: "login-provider",
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any, req) {
        const { id, name, email, role } = credentials;
        return { id, name, email, role };
      },
    }),

    GoogleProvider({
      id: "google-provider",
      name: "Google",
      async profile(profile, tokens) {
        const res = await handleOAuthServerReq({
          name: profile.name,
          email: profile.email,
          password: " ",
          profile: profile.picture,
        });
        return { ...res };
      },
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      return {
        ...session,
        ...token,
      };
    },
  },
};
