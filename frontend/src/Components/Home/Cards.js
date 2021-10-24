import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Get to know us Better</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              // src={`process.env.PUBLIC_URL/images/img-9.jpg`}
              text='Part 1'
              label='Adventure'
              path='/Part1'
            />
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              // src={`process.env.PUBLIC_URL/images/img-9.jpg`}
              text='Part 2'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              // src={`process.env.PUBLIC_URL/images/img-9.jpg`}
              text='Part 1'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              text='Part 2'
              label='Luxury'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              text='Part 3'
              label='Mystery'
              path='/'
            />
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              text='Part 4'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non elit nec urna vvel sagittis lobortis, diam orci vulputate arcu, at tempus dui nisl et metus.'
              label='Adrenaline'
              path='/'
            />
            <CardItem
              src='https://www.healthcareitnews.com/sites/hitn/files/mhealth_illustration.jpg'
              // src={`process.env.PUBLIC_URL/images/img-9.jpg`}
              text='Part 1'
              label='Adventure'
              path='/page8'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
