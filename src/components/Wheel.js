import React from 'react';
import { Modal, Row, Col } from 'antd';
//import Roulette from 'react-roulette-game';
import Roulette from './Roulette';
import './wheel.css';
import pointer_img from '../images/pointer.png';
import roulette_img_under_highlight from '../images/rou_under_high22.png';


const Wheel = () => {

  const on_complete = prize => {
     Modal.info({
      title: 'Weighted random prize',
      content: prize,
      okText: 'Spin again',
      onOk() {
        const $ = s => document.querySelector(s);
        $('.reset-btn').click();
      },
    });
  };

  const roulette_props = {
    roulette_img_under_highlight,
    pointer_img,
    on_complete,
    has_reset: true,
    start_text: 'Spin',
    prize_arr: [
      'Baseball (weight: 0.6)',
      'Rugby (weight: 0.2)',
      'Tennis (weight: 0.15)',
      'Socce (weight: 0.10)',
      'Badminton (weight: 0.0125)',
      'Basketball (weight: 0.0125)',
    ]
  };

  return (
    <>
      <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
        <Col xs={16} align="middle">
          <div className="box">
            <Roulette {...roulette_props} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Wheel;
