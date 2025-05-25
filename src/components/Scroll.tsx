import React, { ReactNode } from 'react';

interface ScrollProps {
  children: ReactNode;  // Accepts any valid React children
}

const Scroll: React.FC<ScrollProps> = ({ children }) => {
  return (
    <div style={{ overflow: 'scroll', border: '1px solid black', height: '800px' }}>
      {children}
    </div>
  );
};

export default Scroll;