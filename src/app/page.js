import fs from "node:fs";
import path from "node:path";

export default function Home() {
  const invitationHtmlPath = path.join(process.cwd(), "invitation.html");
  const invitationHtml = fs.readFileSync(invitationHtmlPath, "utf8");

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
