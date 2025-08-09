import { useParams } from "react-router-dom";

export default function TournamentDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold">Tournament Details: {id}</h1>
      <p>Your tournament participation details.</p>
    </div>
  );
}
