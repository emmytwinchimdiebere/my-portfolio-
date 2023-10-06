import * as React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';



export default function CircleLoader() {
  

  return (
    <div>
<CirclesWithBar
  height="100"
  width="100"
  color="#fff"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor="#666"
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>
    </div>
  );
}           