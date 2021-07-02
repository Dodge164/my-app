import React from 'react';

import './app-header.css';

const AppHeader = ({ allPosts, liked }) => {
  return (
    <div className="app-header d-flex">
      <h1>Irishka Che</h1>
      <h2>
        {allPosts} records, liked {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
