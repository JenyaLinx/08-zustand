"use client";

import { useRouter, useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import css from "../NotePreview.module.css";

export default function NotePreview() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const handleClose = () => {
    router.back();
  };
if (isLoading) return <p>Loading...</p>;
if (isError || !data) return <p>Error</p>;

return (
<Modal onClose={handleClose}>
<h2>{data.title}</h2>
<p>{data.content}</p>
<p>{data.tag}</p>
<p>{new Date(data.createdAt).toLocaleString()}</p>

<button onClick={handleClose}>Close</button>
</Modal>
);
}
