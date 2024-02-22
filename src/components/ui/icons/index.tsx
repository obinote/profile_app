import React from 'react';
import {SvgProps} from 'react-native-svg';
import Upload from './Upload';

interface Props extends SvgProps {
  name: string;
}

const LocalSvgIcon: React.FC<Props> = ({name, ...props}) => {
  switch (name) {
    case 'upload':
    default:
      return <Upload {...props} />;
  }
};
export default LocalSvgIcon;
