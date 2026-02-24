import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/api/') || pathname.startsWith('/admin')) {
    return;
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!_next|images|fonts|favicon|admin|api).*)'],
};