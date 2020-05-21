import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBUilder from './containers/BurgerBuilder/BurgerBuilder';
function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBUilder/>
      </Layout>
    </div>
  );
}

export default App;
