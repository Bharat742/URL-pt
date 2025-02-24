// next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    id?: string; // Custom property to store user ID
  }

  interface JWT {
    id?: string; // Custom property to store user ID
  }
}
