export async function POST(request: Request) {
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");
  return Response.json({ title, content });
}
