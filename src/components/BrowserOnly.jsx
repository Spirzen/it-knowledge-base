import React, { useState, useEffect } from 'react';

const BrowserOnly = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <>{children()}</>;
};

export default BrowserOnly;