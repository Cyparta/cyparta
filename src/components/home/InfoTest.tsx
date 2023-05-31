import React from 'react'
import AnimatedNumber from 'react-animated-numbers'
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});
const InfoTest = () => {
  return (
    <div>
        test

        <AnimatedNumbers
            animateToNumber={12}
            fontStyle={{ fontSize: "2rem", fontWeight: "800" }}
            configs={[
              { mass: 1, tension: 220, friction: 100 },
              { mass: 1, tension: 180, friction: 130 },
              { mass: 1, tension: 280, friction: 90 },
              { mass: 1, tension: 180, friction: 135 },
              { mass: 1, tension: 260, friction: 100 },
              { mass: 1, tension: 210, friction: 180 },
            ]}
          ></AnimatedNumbers>
    </div>
  )
}

export default InfoTest