export async function GET() {
  return Response.json({
    service: "ddscan",
    status: "ok",
    phase: "foundation",
  });
}
