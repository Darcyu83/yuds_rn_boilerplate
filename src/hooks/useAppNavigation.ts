import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackNavParams} from '../navigation/types';

interface IProps {}

const useAppNavigation = () => {
  const navigation =
    useNavigation<NativeStackScreenProps<TRootStackNavParams>['navigation']>();
  return navigation;
};

export default useAppNavigation;
