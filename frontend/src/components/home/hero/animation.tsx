'use client';

import Spline from '@splinetool/react-spline';

type Props = {};

const Animation = (props: Props) => {
  return (
    <Spline
      className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.9] items-center justify-center md:justify-start"
      scene="https://prod.spline.design/qYwvFJgFTpuffPBr/scene.splinecode"
    />
  );
};

export default Animation;
