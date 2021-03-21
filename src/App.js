import TextMask from './components/TextMask';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MaskZoomOut from './components/MaskZoomOut';
import PageSlide from './components/PageSlide';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={TextMask} />
          <Route path='/mask' component={MaskZoomOut} />
          <Route path='/page' component={PageSlide} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
