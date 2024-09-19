import React from 'react';
import Container from './page/container';
import jsonData from "./page/ddugky_project.json"

const App = () => {
  return (
    <div>
      <h1>Technical Project Management Course</h1>
      <Container data={jsonData} />
    </div>
  );
};

export default App;
