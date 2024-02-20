// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LandingPage from './Pages/Landingpage'; // Import the component for the home route
// import WorkingAreas from './Pages/Workingareas'; // Import the component for the working areas route
// import Carrers from './Pages/Carrers'; // Import the component for the careers route
// import Blogs from './Pages/blogs'; // Import the component for the blogs route
// import Contact from './Pages/Contact'; // Import the component for the contact route

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={LandingPage} />
//         <Route path="/working-areas" component={WorkingAreas} />
//         <Route path="/careers" component={Carrers} />
//         <Route path="/blogs" component={Blogs} />
//         <Route path="/contact-us" component={Contact} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
// App.js

import React from 'react';
import Carrers from './Pages/Carrers';

const App = () => {
  return (
    <div className="app">
      <Carrers />
    </div>
  );
}

export default App;