import Link from "next/link";

const tags = ["all", "Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function Sidebar() {
  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag}>
          <Link href={`/notes/filter/${tag}`}>
            {tag === "all" ? "All notes" : tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
