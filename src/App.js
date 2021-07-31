import {Books} from './components'
import Authors from './components/Authors'

function App() {
  return (
    <div className="main">
      <h1>My Reading List</h1>
      <Books />
      <Authors />
    </div>
  );
}

export default App;
