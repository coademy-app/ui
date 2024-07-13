import React from 'react';
import starYellow from '../../assets/star-yellow.svg'; // Replace with the correct path to your yellow star image
  import  starBlack from  '../../assets/star-black.svg'; // Replace with the correct path to your black star image
const StarRating = ({ rating }) => {
  
  const yellowStars = rating;
  const blackStars = 5 - rating;
  const stars = [];

  for (let i = 0; i < yellowStars; i++) {
    stars.push(<img key={`star-yellow-${i}`} src={starYellow} alt="Yellow Star" className='w-4 h-4 object-cover' />);
  }

  for (let i = 0; i < blackStars; i++) {
    stars.push(<img key={`star-black-${i}`} src={starBlack} alt="Black Star" className='w-4 h-4 object-cover' />);
  }

  return <div className="flex space-x-1">{stars}</div>;
};

export default StarRating;
