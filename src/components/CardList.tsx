import React from 'react';
import Card from './Card';

interface Robot {
  id: number;
  name: string;
  email: string;
}

interface CardListProps {
  robots: Robot[];
}

const CardList: React.FC<CardListProps> = ({ robots }) => (
  <div>
    {robots.map(robot => (
      <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
    ))}
  </div>
);

export default CardList;