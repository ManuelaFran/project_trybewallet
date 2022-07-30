import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h3>TrybeWallet</h3>
        <Header />
        <WalletForm />
      </div>
    );
  }
}

export default Wallet;
