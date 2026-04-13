import { ReactNode } from "react";
import css from "./LayoutNotes.module.css";

export default function NotesLayout({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <aside>{sidebar}</aside>
      <main>{children}</main>
    </div>
  );
}
