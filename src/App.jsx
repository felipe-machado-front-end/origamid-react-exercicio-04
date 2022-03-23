import Count from "./Count";
import { ProviderContext } from "./hooks/CountContext";
function App() {
  return (
    <div>
      <ProviderContext>
        <Count />
      </ProviderContext>
    </div>
  );
}

export default App;
