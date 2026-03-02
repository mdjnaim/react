import React from 'react'
import './work.css';
import PickMeals from '../pick-meals.png';
import ChooseMeals from '../choose-meals.png';
import DeliveryMeals from '../delivery-meals.png';

const Work= () => {
    const workInfoData = [
        {
            image: PickMeals,
         title: "Pick Meals",
         text: "Browse our menu and pick your favorite meals."
        },
         {
            image: ChooseMeals,
            title: "Choose Meals",
            text: "We offer a wide variety of delicious meals to choose from."
         },
         {
            image: DeliveryMeals,
            title: "Deliver Meals",
            text: "Fast and reliable delivery of your favorite meals."
         }
    ];
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works
            </h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
        </div>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
                <div className="work-section-info">
                    <div className="info-boxes-img-container"><img src={data.image} alt="" /></div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Work
