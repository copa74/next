import connectDB from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'e7dbf0783bbbcd82e52b',
      clientSecret: 'e9ebe9616a5502fc1a5dddc65098c7411c68b89b',
    }),
  ],
  secret : 'qwer1234',
  adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 