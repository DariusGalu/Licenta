import React from 'react';
import '../Tools/live.css';

 
const Calculator = () => (  
  <div>
    <iframe className="calculator" src="https://freeserv.dukascopy.com/2.0/?path=position_size_calculator/index&amp;showHeader=false&amp;showFooter=false&amp;accentColor=%23000000&amp;availableInstruments=l%3A&amp;instrument=EUR/USD&amp;accountCurrency=USD&amp;accountBalance=1000&amp;stopLossPips=50&amp;riskUnit=1&amp;riskPercentage=2&amp;width=585&amp;height=364&amp;adv=popup" 
    />
  </div>
);
export default Calculator;