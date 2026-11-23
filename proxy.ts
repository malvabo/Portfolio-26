import { NextResponse, type NextRequest } from 'next/server'

// aipm.maryborysova.com serves the public AI page at its root.
// Everything else on the subdomain (assets, /_next, /ai/*) passes through unchanged.
const PUBLIC_HOSTS = ['aipm.maryborysova.com']

export function proxy(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0] ?? ''
  if (PUBLIC_HOSTS.includes(host) && request.nextUrl.pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/ai'
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}

export const config = { matcher: ['/'] }
