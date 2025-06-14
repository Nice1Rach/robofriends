import React from 'react';

interface CardProps {
  name: string;
  email: string;
  id: number;
}

const Card: React.FC<CardProps> = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-yellow br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;