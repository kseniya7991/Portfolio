import React from 'react';
import Scramble from 'react-scramble';

function textScrambler({ text, isHover }) {
  if (isHover) {
    return (
      <Scramble
        autoStart
        text={text}
        speed="medium"
        steps={[
          {
            roll: 10,
            action: '+',
            type: 'random',
          },
          {
            action: '-',
            type: 'random',
          },
        ]}
      />
    );
  }
  return text;
}

export default textScrambler;
