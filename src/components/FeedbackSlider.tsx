import React, { useState } from 'react';
import { Slider, styled } from '@mui/material';

const imageMap: { [key: number]: string } = {
  1: '/emoji-1.svg', 
  2: '/emoji-2.svg',
  3: '/emoji-3.svg',
  4: '/emoji-4.svg',
};

interface CustomSliderProps {
  sliderValue: number; 
}

interface FeedbackSliderProps {
  onSliderChange: (value: number) => void;
}

const CustomSlider = styled(Slider, {
  shouldForwardProp: (prop) => prop !== 'sliderValue' 
})<CustomSliderProps>(({ sliderValue }) => ({
  '& .MuiSlider-thumb': {
    width: 45,
    height: 42,
    backgroundColor: 'transparent',
    backgroundSize: '128%',
    backgroundPosition: `50% 16%`, 
    backgroundImage: `url(${imageMap[sliderValue]})`, 
    border: 'none',
    boxShadow: 'none',
    '&:focus, &:hover, &$active': {
      boxShadow: 'none', 
    },
  },
}));

const FeedbackSlider: React.FC<FeedbackSliderProps> = ({ onSliderChange }) => {
  const [sliderValue, setSliderValue] = useState<number>(1);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setSliderValue(newValue);
      onSliderChange(newValue); 
    }
  };

  return (
    <div className="w-72 mx-auto mt-8"> 
      <CustomSlider
        defaultValue={1}
        min={1}
        max={4}
        step={1}
        value={sliderValue}
        onChange={(event, newValue) => handleSliderChange(event, newValue as number)} 
        sliderValue={sliderValue}
      />
    </div>
  );
};

export default FeedbackSlider;
