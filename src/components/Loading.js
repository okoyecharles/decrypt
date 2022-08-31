import React from 'react';
import { Bars } from 'react-loader-spinner';

function Loading() {
  return (
    <Bars
      height="80"
      width="80"
      color="#efb90a"
      ariaLabel="bars-loading"
      wrapperStyle={{
        padding: '2em', display: 'grid', placeItems: 'center',
      }}
      wrapperClass=""
      visible
    />
  );
}

export default Loading;
