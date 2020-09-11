import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import '../Tools/live.css';
 
const LiveCharts = () => (
  <div className="trading">
  <TradingViewWidget
    symbol="FX:AUDUSD"
    theme={Themes.DARK}
    locale="en"
    size={{width: '900', height: '900'}}
    interval= "D"
    timezone="Etc/UTC"
    watchlist= {
           "FX:AUDUSD",
           "OANDA:XAUUSD",
           "NASDAQ:AAPL"
    }
    details={true}
    container_id="tradingview_584a5"
    enable_publishing={false}
    withdateranges={true}
    hide_side_toolbar={false}
    allow_symbol_change={true}
  />
  </div>
);

export default LiveCharts;