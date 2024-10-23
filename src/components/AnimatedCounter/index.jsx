import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function AnimatedCounter({ end, prefix, width }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div ref={ref} className="text-center" style={{ width }}>
      {hasAnimated ? (
        <CountUp
          className="text-nowrap font-dudka md:text-[46px] text-[32px] font-bold"
          separator=" "
          prefix={prefix}
          start={0}
          end={end}
          duration={4}
        />
      ) : (
        <div>0</div>
      )}
    </div>
  );
}

export default AnimatedCounter;
