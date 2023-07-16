import CountUp from "react-countup";
import * as React from "react";


const Counter = (props) => {
    return <CountUp start={0} end={props.label} duration={Math.random() * (5 - 2) + 2} />
}

export default React.memo(Counter)
