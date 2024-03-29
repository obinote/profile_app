import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const Upload: React.FC<SvgProps> = props => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      strokeWidth={2}>
      <Path
        d="M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M16 8L12 4M12 4L8 8M12 4L12 16"
        stroke="#111827"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Upload;
