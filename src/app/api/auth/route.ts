import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`;
  return NextResponse.redirect(url);
}