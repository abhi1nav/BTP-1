import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "./TopicScreen.css";

const TopicScreen = () => {
  return (
    <div className='div-row'>
      <div>
        <img
          className='img-p1'
          src='https://the-gadgeteer.com/wp-content/uploads/2019/11/pampers-lumi-smart-diapers-01.jpg'
          alt='lol'
        ></img>

        <h2 className='img-blw-txt'>
          A new smart diaper can send alert to parents when it's time for a
          change and can also predict the next pee time.
        </h2>

        <h2 className='btn-abv-text'>You can download our application here</h2>

        <a href='https://www.google.com/'>
          <Button className='btn-link'>Visit Google</Button>
        </a>
      </div>

      <div>
        <h1 className='h1-top'>
          A wet diaper is a main cause for rashes and various other bacterial
          skin infections .{/* infections, loreum ipsum smssdsf sadafdaf. */}
        </h1>

        <h1 className='h1-top'>
          A new smart diaper deployed with RFID sensors for real time
          communication, can sense the wetness and wirelessly send notification
          to parents/caregiver that it's time for a change , which ultimately
          cut down on diaper rash and other problems that causes due to late
          changing.
        </h1>

        <h1 className='h1-top'>
          Our application can also predict the next pee time as well which is
          not just used for babies, but for the patients who are unable to take
          care of themselves .<br />
        </h1>

        <h1 className='h1-top'>
          It could be convenient for a caregiver to be notified that a patient
          needs changing .
        </h1>

        <br />
      </div>
    </div>
  );
};

export default TopicScreen;
