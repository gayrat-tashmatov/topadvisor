import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  if (!clientId) {
    return new Response('OAUTH_CLIENT_ID not set', { status: 500 });
  }
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`;
  return NextResponse.redirect(url);
}