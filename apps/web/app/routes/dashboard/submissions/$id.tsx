import { useParams } from "react-router";

export default function SubmissionDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold">Submission Details: {id}</h1>
      <p>Details for your submission.</p>
    </div>
  );
}
