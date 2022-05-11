import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout';

function App() {

  const onToken=(token)=>{ //method
    console.log(token);
  };
  return (
    <div className="App">
      <StripeCheckout
        token={onToken}
        name="payment"
        currency='dolar'
        amount={1000}
        stripeKey="pk_test_51KT8SpBBw14VyWivs9ED49Bs8HGBXtDMsc9T80zGDE4xiose0TayxnxBzzDE8rwfUCfrpdlitKloUIgawtnnue6I00HYzKCmtD"
      />
    </div>
  );
}

export default App;
