import { NextResponse } from 'next/server';

export const middleware = async (req, ev) => {
  const url = req.nextUrl;
  const token = url.searchParams.get('token');

  if (token) {
    url.searchParams.delete('token');

    const res = NextResponse.redirect(url);
    
    res.cookie('test', 'fake', {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: 'lax',
      domain: '',
      path: '/',
    });

    res.cookie('token', token, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: 'lax',
      domain: '',
      path: '/',
    });

    return res
  }
}
