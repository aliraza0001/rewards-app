import {
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
  FlatListProps,
  PressableProps,
  ScrollViewProps,
} from 'react-native';

type CombinedStyle =
  | ViewStyle
  | ImageStyle
  | TextStyle
  | FlatListProps<any>
  | PressableProps
  | ScrollViewProps;

export const createStyleSheet = <T extends {[key: string]: CombinedStyle}>(
  styles: T,
) => StyleSheet.create(styles);
