import { useState } from "react";
function App() {
  const [show, setShow] = useState(true);
  return <>
    <button onClick={() => setShow(!show)}>Toggle</button>
    {show && <h2>Visible Component</h2>}
  </>;
}
export default App;
