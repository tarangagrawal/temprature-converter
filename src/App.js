import React, { Component } from 'react';
import {Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class Temprature extends Component {
  constructor(props) {
    super(props)
    this.state = {
      celsius:'',
      fahrenheit:''
    };
  }

   toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  }

   toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  }

  fahrenheitHandle = (ev) => {
  let toCelsius = this.toCelsius(ev.target.value)
    this.setState({
      fahrenheit:ev.target.value,
      celsius:Math.round(toCelsius * 100) / 100
    })
  }
  celsiusHandle = (ev) => {
    let toFahrenheit = this.toFahrenheit(ev.target.value)
    this.setState({
      celsius:ev.target.value,
      fahrenheit:Math.round(toFahrenheit * 100) / 100
    })
    
  }

  render() {
    return (
      <div className="App flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
                <Card className="p-4" style={{top:'30%'}}>
                  <CardBody>
                    <Form>
                      <img src='/logo.png' style={{height:'60px',width:'50px'}} alt="temprature logo"/>
                      <h4>Convert Temprature</h4>
                      <p className="text-muted">Superfast !</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i style={{color:'#FF6347'}}>&#8451;</i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="number" placeholder="Temprature in Celsius" autoComplete="temprature" value={this.state.celsius} onChange={this.celsiusHandle}/>
                      </InputGroup>
                      <img src='/arrows.png' alt="arrows"/>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i style={{color:'#87CEFA'}}>&#8457;</i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="number" placeholder="Temprature in Fahrenheit" autoComplete="current-password" value={this.state.fahrenheit} onChange={this.fahrenheitHandle}/>
                      </InputGroup>
                    </Form>
                  </CardBody>
                </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Temprature;
