/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import {Row, Col,   Card, CardBody  } from 'reactstrap';
import { connect } from 'react-redux';
import { actionBuscar } from '../Store/Actions/Actions';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hola : "Encuetnra tu Pokemon",
             inputBuscar: ""
        }
    }
    
    render() {
        const favssss = localStorage.getItem('myFavs');
        const arrFavs = [JSON.parse(favssss)]
        return (

            <div>
                <div className="headerPokemon"></div>
 

                <Row>
                    <Col sm={12}>
                        <div className="results">
                            <h1> Favoritos.... </h1>
                            <p>Por el momento sólo se puede un favorito :(</p>
                            {(arrFavs.length > 0) ? (
                                arrFavs.map((a,b) => {
                                console.log(a,b)
                                return (
                                    <div key={b}>
                                    <Card>
                                      <CardBody>
                                        <h1  className="titpikapika">{a.name}</h1>
                                            <ul>
                                                <li>base_experience: {a.base_experience}</li>
                                                <li>height: {a.height}</li>
                                                <li>location_area_encounters: {a.location_area_encounters}</li>
                                                <li>order: {a.order}</li>
                                            </ul>
                                      </CardBody>
                                    </Card>
                                  </div>
                                )
                                }) 
                            ) : (
                                <img style={{maxWidth:"100%"}} src="https://www.tapeciarnia.pl/tapety/normalne/tapeta-detektyw-pikachu-z-lupa.jpg"/>
                            )}
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    miState: state
  });
  
  const mapDispatchToProps = (dispatch) => ({
    busqueda_server: (data) => {
      dispatch(actionBuscar(data));
    },
  });


export default connect(mapStateToProps, mapDispatchToProps)(Home);
