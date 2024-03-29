import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {
  selectProgramStatus,
  fetchProgramBalanceAsync,
} from './features/program/program-slice';
import AreaChart from './features/graph/area-chart';
import { EReducerState } from './app/enum';
import Landing from './features/landing/landing';

function App() {
  const programStatus: EReducerState = useAppSelector(selectProgramStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProgramBalanceAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        {' '}
        <Landing />
      </div>
      {/* <div className="App">
        {programStatus === EReducerState.LOADING && (
          <div className="App-loading-font">Loading...</div>
        )}
        {programStatus === EReducerState.IDLE && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Endcoin/Gaiacoin</h1>
            <AreaChart />
          </div>
        )}
      </div> */}
    </>
  );
}

export default App;
