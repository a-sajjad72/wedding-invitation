import fs from "node:fs/promises";
import path from "node:path";

async function getInvitationHtml() {
  const invitationHtmlPath = path.join(process.cwd(), "invitation.html");

  try {
    return await fs.readFile(invitationHtmlPath, "utf8");
  } catch (error) {
    const errorCode = error?.code ?? "UNKNOWN";
    throw new Error(
      `Could not load invitation.html from ${invitationHtmlPath} (error: ${errorCode}).`,
      { cause: error }
    );
  }
}

export default async function Home() {
  const invitationHtml = await getInvitationHtml();

  return (
    <main className="h-screen w-screen">
      <iframe
        title="Wedding Invitation"
        srcDoc={invitationHtml}
        className="h-full w-full border-0"
      />
    </main>
  );
}
