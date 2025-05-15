import NextAuth from 'next-auth';

import authConfig from './auth.config';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './prisma';

async function getUser(email: string, password: string): Promise<any> {
    return {
        id: 1,
        name: 'test user',
        email: email,
        password: password,
    };
}

export const {
    handlers: { GET, POST },
    signIn,
    signOut,
    auth,
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: 'jwt' },
    ...authConfig,
});
