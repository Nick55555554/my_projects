import { HashRouter as Router } from 'react-router-dom';
import MyRoutes from './app/routes';
function App() {
  return (
    <Router>
      <MyRoutes/>
    </Router>
  );
}

export default App;
