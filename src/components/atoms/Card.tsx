import React from 'react';
import "../../styles/Card.css"

interface CardProps {
    text: React.ReactNode;
    title: string;
  }

const Card: React.FC<CardProps> = ({ text, title }) => {
    return (
        <div className='card-wrapper'>
            <div className='title-text'>
                <h1>{title}</h1>
            </div>
            <div className='card-container'>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Card;