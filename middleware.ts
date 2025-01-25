import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const protectedRoutes = ['/dashboard']
  const role = request.cookies.get('role')?.value
  
  if (protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route))) {
    if (!role) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  
  return NextResponse.next()
}
