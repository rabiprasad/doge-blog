import Navbar from './Navbar';
import Home from './Home';
import BlogDetails from './BlogDetails';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Create from './Create';
import Error from './Error';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path='*'>
              <Error/>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
