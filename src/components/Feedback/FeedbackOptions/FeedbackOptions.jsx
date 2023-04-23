import React from 'react';
import { FbOptList, FbOptItem, FBOptBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleClick }) => {
  return (
      <FbOptList>
        {options.map((option) => {
          const btnOption = option.charAt(0).toUpperCase() + option.slice(1);
          return (
            <FbOptItem key={option}>
              <FBOptBtn prop={option} type='button' onClick={() => handleClick(option)}>
                {btnOption}
              </FBOptBtn>
            </FbOptItem>
          );
        })}
      </FbOptList>
  );
};
