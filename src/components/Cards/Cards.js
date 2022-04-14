import React from 'react'
import Carditem from './Carditem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations</h1>
        <div className='cards__wrapper'>
            <ul className='card__items'>
                <Carditem src="img-9.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Adventure" path="/services"/>
                <Carditem src="img-9.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Luxury" path="/services"/>
            </ul>
            <ul className='card__items'>
                <Carditem src="img-9.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Adventure" path="/services"/>
                <Carditem src="img-9.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Luxury" path="/services"/>
                 <Carditem src="img-9.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Luxury" path="/services"/>
            </ul>
        </div>
    </div>
  )
}

export default Cards;