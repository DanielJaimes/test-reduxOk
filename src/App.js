import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Favoritos from './Favoritos';
import { Container, Row,Col } from 'reactstrap';

export default function App() {
  return (
    <Router>
      <Container>
      <div>
        <Row>
          <Col sm={12} style={{padding:"0px"}}>
            <nav className="menu menuNav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/favoritos">Favoritos</Link>
                </li>
              </ul>
            </nav>
        </Col>
        </Row>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          
            <Switch>
              <Route path="/favoritos">
                <Favoritos />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          

      </div>
      </Container>
    </Router>
  );
}
