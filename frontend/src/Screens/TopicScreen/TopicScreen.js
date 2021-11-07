import React from "react";
import Button from "../../Components/Button/Button";
import "./TopicScreen.css";

const TopicScreen = () => {
  return (
    <div className='flexbox'>
      <div className='flexbox-col'>
        <div className='left-child'>
          <img
            className='img-p1'
            src='https://the-gadgeteer.com/wp-content/uploads/2019/11/pampers-lumi-smart-diapers-01.jpg'
            alt='lol'
          ></img>
        </div>

        <div className='left-bottom-child'>
          <h2 className='btn-abv-text'>
            A new smart diaper can send alert to parents when it's time for a
            change and can also predict the next pee time.
          </h2>
        </div>

        <div className='left-bottom-child'>
          <h2 className='btn-abv-text'>
            You can download our application here
          </h2>

          <br />
          <a href='https://www.google.com/'>
            <Button className='btn-link'>Visit Google</Button>
          </a>
        </div>
      </div>

      <div className='right-child'>
        <div className='right-child-text'>
          A new smart diaper can send alert to parents when it's time for a
          change and can also predict the next pee time.
          <br />A wet diaper is a main cause for rashes and some urinary
          infections. <br />A new smart diaper deployed with RFID sensors for
          real time communication, can sense the wetness and wirelessly send
          notification to parents/caregiver that it's time for a change, which
          ultimately cut down on diaper rash and other problems that causes due
          to late changing.
          <br /> Our application can also predict the next pee time as well
          which is not just used for babies, but for the patients who are unable
          to take care of themselves. It could be convenient for a caregiver to
          be notified that a patient needs changing.
        </div>
      </div>
    </div>
  );
};

export default TopicScreen;
