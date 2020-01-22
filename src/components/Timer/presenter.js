import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components';
import Button1 from "../Button1";
import Button2 from "../Button2";

const formatTime = (time) => {
  let minutes = Math.floor(time/60);
  time -= minutes * 60
  let seconds = parseInt(time % 60, 10);
  return `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`
}

class Timer extends Component {

  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.timerInterval);
    }
  }

  render() {
    console.log(this.props)
    const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer, addSecond } = this.props;
    return (
      <Container>
      <Row>
      <Col>
        <ElementStyle>{formatTime(timerDuration-elapsedTime)}</ElementStyle>
      </Col>
      </Row>
      <div class="text-center">
        {!isPlaying ? ( <Button1 onPress={startTimer}/> ) : ( <Button2 onPress={restartTimer}/> )}
      </div>
      </Container>
    );
  }
}

export default Timer;

const ElementStyle = styled.p`
    margin: 10px;
    padding: 10px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    background: black;
    font-size: 50px;
`
