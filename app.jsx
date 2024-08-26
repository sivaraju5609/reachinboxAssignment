import React, { useState } from 'react';
import Layout from './components/Layout';

// Additional components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // State to manage counter
  const [count, setCount] = useState(0);

  // Function to handle incrementing the counter
  const incrementCounter = () => {
    setCount(count + 1);
  };

  // Function to handle decrementing the counter
  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Header title="My React App" />
      <Layout>
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <h1>Welcome to the App!</h1>
          <p>Click the buttons to increase or decrease the counter.</p>
          <div>
            <button onClick={decrementCounter} style={{ marginRight: '10px' }}>-</button>
            <span>{count}</span>
            <button onClick={incrementCounter} style={{ marginLeft: '10px' }}>+</button>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
