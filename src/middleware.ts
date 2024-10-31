import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	if (pathname.startsWith('/vip')) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	return NextResponse.next();
}
