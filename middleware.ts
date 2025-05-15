export { auth as middleware } from '@/lib/auth';

import NextAuth from 'next-auth';
import { authConfig } from '@/lib/auth.config';
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from '@/lib/routes';

const { auth } = NextAuth(authConfig);

export default auth((request: any) => {
    const { nextUrl } = request;

    const isAuthenticated = !!request.auth;
    const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

    if (isPublicRoute && isAuthenticated)
        return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

    if (!isAuthenticated && !isPublicRoute)
        return Response.redirect(new URL(ROOT, nextUrl));
});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
