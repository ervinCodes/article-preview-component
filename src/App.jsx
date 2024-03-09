import { useState } from "react";
import Article from './components/Article.jsx'

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Article/>
    </>
  );
}

export default App;
