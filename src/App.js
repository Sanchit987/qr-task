import './App.css';
import QrGen from './components/qrgen';
import React, {useState} from 'react';
import QRCode from 'qrcode';

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function App() {

  const number = useState([...range(1, 10)]);
  console.log(number[0]);
  return (
    <div>
      {number[0].map(no => <div key={no}>
        <QrGen text={`Candidate ${no}`} />
      </div>)}
    </div>
  );
}

export default App;
