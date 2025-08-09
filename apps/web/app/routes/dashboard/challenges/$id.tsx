import { useParams } from "react-router";

export default function ChallengeDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold">Challenge Details: {id}</h1>
      <p>Your challenge attempt/submission.</p>
    </div>
  );
}
