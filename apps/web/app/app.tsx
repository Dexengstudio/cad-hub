import NxWelcome from "./nx-welcome";
import { Button } from "@cad-challenges-hub/ui";

export function App() {
  return (
    <div className="bg-red-100">
      <div className="bg-red-300">this is a test</div>
      <Button>Click Me</Button>

      <NxWelcome title="@cad-challenges-hub/web" />
    </div>
  );
}

export default App;


