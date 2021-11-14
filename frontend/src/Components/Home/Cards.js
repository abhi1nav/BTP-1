import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const text1 =
  "A new smart diaper can send alert to parents when it's time for a change and can also predict the next pee time.";

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Get to know us Better</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://babyland.com.sg/images/slash/smartdiaper800_800white_123.jpg'
              // src={`process.env.PUBLIC_URL/images/img-9.jpg`}
              text={text1}
              label='Smart Diapers'
              path='/Part1'
            />
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              // src={`process.env.PUBLIC_URL/images/img-9.jpg`}
              text='Part 2'
              label='Sensor 2'
              path='/'
            />
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              // src={`process.env.PUBLIC_URL/images/img-9.jpg`}
              text='Part 3'
              label='Sensor 3'
              path='/'
            />
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              text='Part 4'
              label='Sensor 4'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              text='Part 5'
              label='Sensor 5'
              path='/'
            />
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              text='Part 6'
              label='Sensor 6'
              path='/'
            />
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non elit nec urna vvel sagittis lobortis, diam orci vulputate arcu, at tempus dui nisl et metus.'
              label='Sensor 7'
              path='/'
            />
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              // src={`process.env.PUBLIC_URL/images/img-9.jpg`}
              text='Part 8'
              label='Sensor 8'
              path='/page8'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
