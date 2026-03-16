import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://akashm.dev',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await request.json();
    const { name, email, message, source, hp } = body as {
      name?: string;
      email?: string;
      message?: string;
      source?: string;
      hp?: string;
    };

    // Honeypot check
    if (hp) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Validate fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const cfCountry = request.headers.get('cf-ipcountry') || null;
    const userAgent = request.headers.get('user-agent')?.slice(0, 256) || null;

    const { env } = await import('cloudflare:workers');
    const db = (env as { DB: D1Database }).DB;

    await db
      .prepare(
        `INSERT INTO contacts (name, email, message, source, ip_country, user_agent)
         VALUES (?, ?, ?, ?, ?, ?)`
      )
      .bind(
        name.trim(),
        email.toLowerCase().trim(),
        message.trim(),
        source || '/',
        cfCountry,
        userAgent
      )
      .run();

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('Contact form error:', errorMessage);

    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://akashm.dev',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
