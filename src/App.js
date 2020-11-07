import './App.css';
import HeaderComponent from './component/header/header'
import { BrowserRouter as Router} from 'react-router-dom';
import { getRoutes as Routes } from './routes/index'
const createHistory = require("history").createBrowserHistory;

function App() {
  const history = createHistory();
  return (
    <Router history={history}>
      <HeaderComponent />
      <Routes />
    </Router>
  );
}

export default App;
