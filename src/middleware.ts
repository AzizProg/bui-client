import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('currentUser');

  const isAuthPage = request.nextUrl.pathname.startsWith('/login');
  const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard');

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (!token && isDashboardPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
