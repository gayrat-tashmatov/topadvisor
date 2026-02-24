import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.OAUTH_CLIENT_ID,
      client_secret: process.env.OAUTH_CLIENT_SECRET,
      code,
    }),
  });

  const data = await response.json();

  const html = `
    <html><body><script>
      const token = '${data.access_token}';
      const provider = 'github';
      if (window.opener) {
        window.opener.postMessage(
          'authorization:' + provider + ':success:' + JSON.stringify({token, provider}),
          window.location.origin
        );
        window.close();
      }
    </script></body></html>
  `;

  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}