export const runtime = 'nodejs';

export async function POST() {
  return Response.json(
    {
      success: false,
      message: 'Contact form is under development. Backend coming soon.',
    },
    { status: 503 }
  );
}
