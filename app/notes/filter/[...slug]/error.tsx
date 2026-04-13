"use client";

import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>Could not load notes.</p>
      <button onClick={() => router.refresh()}>Retry</button>
    </div>
  );
}