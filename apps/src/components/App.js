import React from 'react';
import AddSour from '../containers/AddSour';
import VisibleSourList from '../containers/VisibleSourList';

const App = (props) => {
  return (
    <div className="apps">
      <AddSour />
      <VisibleSourList />
    </div>
  );
}

export default App;