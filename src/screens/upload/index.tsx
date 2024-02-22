import {useNavigation} from '@react-navigation/native';
import ChoosePicture from 'components/app/upload/ChoosePicture';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import tw from 'utils/tailwind';

const Upload: React.FC<{}> = () => {
  const navigation = useNavigation();

  const closeHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
      <Modal
        isVisible={true}
        swipeDirection={['down']}
        style={tw.style('justify-end m-0')}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionOutTiming={0}
        backdropTransitionInTiming={0}
        onBackButtonPress={closeHandler}
        onBackdropPress={closeHandler}>
        <View style={tw`bg-white p-4 gap-y-2`}>
          <ChoosePicture onDoneTake={closeHandler} />
        </View>
      </Modal>
    </>
  );
};

export default Upload;
