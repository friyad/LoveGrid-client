"use client";

import React from "react";
import Countdown from "react-countdown";

const Completionist = () => {
  return (
    <h4 className="text-sm text-cusOrange font-bold shrink-0 whitespace-nowrap text-center">
      No longer taking funds
    </h4>
  );
};

interface Renderer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const renderer = ({ days, hours, minutes, seconds, completed }: Renderer) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span className="whitespace-nowrap flex gap-0.5">
        <span>{days}</span>
        <span>:</span>
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </span>
    );
  }
};

const Countdown_timer = ({ time }: { time: number }) => {
  return <Countdown date={time} renderer={renderer}></Countdown>;
};

export default Countdown_timer;
