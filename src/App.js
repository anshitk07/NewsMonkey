// import './App.css';

// import React, { Component } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";

// export default class App extends Component {
  
//   render() {
//     return ( 
//       <div>
//         <Router>
//         <NavBar/> 
//         <Routes>
//           <Route exact path="/"><News key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
//           <Route exact path="/business"><News key="business" pageSize={this.pageSize} country="in" category="Business"/></Route>
//           <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/></Route>
//           <Route exact path="/general"><News key="general" pageSize={this.pageSize} country="in" category="General"/></Route>
//           <Route exact path="/health"><News key="health" pageSize={this.pageSize} country="in" category="Health"/></Route>
//           <Route exact path="/science"><News key="science" pageSize={this.pageSize} country="in" category="Science"/></Route>
//           <Route exact path="/sports"><News key="sports" pageSize={this.pageSize} country="in" category="Sports"/></Route>
//           <Route exact path="/technology"><News key="technology" pageSize={this.pageSize} country="in" category="Technology"/></Route>
//         </Routes>
//         </Router>
//       </div>
//     )
//   }
// }

import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 12;

  state = {
    progress:0
  }

  setProgress(progress){
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="general" pageSize={this.pageSize} country="in" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News key="business" pageSize={this.pageSize} country="in" category="Business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />}
            />
            <Route
              exact
              path="/general"
              element={<News key="general" pageSize={this.pageSize} country="in" category="General" />}
            />
            <Route
              exact
              path="/health"
              element={<News key="health" pageSize={this.pageSize} country="in" category="Health" />}
            />
            <Route
              exact
              path="/science"
              element={<News key="science" pageSize={this.pageSize} country="in" category="Science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News key="sports" pageSize={this.pageSize} country="in" category="Sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<News key="technology" pageSize={this.pageSize} country="in" category="Technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

