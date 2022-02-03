import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function App() {
  return (
    <div className="min-h-full">
      <Router>
      <Header />
       
        <Switch>
          {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0"> */}
              <Route path='/' exact component={ProductListing} />
              <Route path='/product/:id' exact component={ProductDetails} />
              <Route></Route>
              {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div> */}
            {/* </div>
          </div> */}
        </Switch>
      </Router>
    </div>
  );
}
export default App;
