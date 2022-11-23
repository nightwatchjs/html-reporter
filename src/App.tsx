import { useState } from 'react';
import { NightwatchIcon } from './icons';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div style={{background: 'var(--color-dark-background)'}}>
        <NightwatchIcon />
      </div>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  );
}

export default App;
