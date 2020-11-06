/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Row, Col, Spinner,  Card, CardBody  } from 'reactstrap';
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
        console.log(this.props.miState,"qdodododododo");
        return (

            <div>
                {this.props.miState.setLoading.loading && <div className="loadingOk"><Spinner className="spinOk" type="grow" color="info" /></div>}
                <div className="headerPokemon"></div>
                
                <Row style={{paddingBottom:"15px"}}>
                    <Col sm={12}>
                    
                        <Form inline onSubmit={(e)=>{
                            e.preventDefault()
                            this.props.busqueda_server(this.state.inputBuscar.toLowerCase() )}}>
                        <h1 className="titOk">{this.state.hola}</h1>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            
                            <Input onChange={(e)=>{
                                this.setState({
                                    inputBuscar: e.target.value
                                })
                            }} value={this.state.inputBuscar} type="text" name="Nombre" id="Nombre" placeholder="Nombre del Pokemon" required />
                        </FormGroup>
                        <Button color="warning" style={{color:"#2774ba"}}>Buscar</Button>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12}>
                        <div className="results">
                            <h1> Resultados....</h1>
                            {(this.props.miState.listaPokemones.resultPokemon.length > 0) ? (
                                this.props.miState.listaPokemones.resultPokemon.map((a,b) => {
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
                                                <li>Type: {a.types[0].type.name}</li>
                                                <li>Move: {a.moves[0].move.name}</li>
                                            </ul>
                                        <Button
                                        onClick={()=>{
                                                let testObject = { 
                                                    'name': a.name,
                                                    'base_experience': a.base_experience,
                                                    'height': a.height,
                                                    'location_area_encounters': a.location_area_encounters,
                                                    'Type': a.types[0].type.name,
                                                    'Move': a.types[0].type.name
                                                 };
                                                 localStorage.setItem('myFavs', JSON.stringify(testObject));
                                        }}
                                        >Agregar a Favorito</Button>
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
