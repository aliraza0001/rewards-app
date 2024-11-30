import {Colors, Layout, Spacing, Typography} from '@app/theme';
import React from 'react';
import {
  Pressable,
  Text,
  ViewStyle,
  TextStyle,
  StyleProp,
  GestureResponderEvent,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  icon,
  fullWidth = false,
  style,
  textStyle,
}) => {
  // Helper to get base styles
  const getBaseButtonStyles = () => ({
    container: {
      flexDirection: Layout.flexDirection.row,
      justifyContent: Layout.justifyContent.center,
      alignItems: Layout.alignItems.center,
      alignSelf: fullWidth ? 'stretch' : 'auto',
      paddingHorizontal:
        size === 'small'
          ? Spacing.sm
          : size === 'large'
          ? Spacing.lg
          : Spacing.md,
      paddingVertical:
        size === 'small'
          ? Spacing.xs
          : size === 'large'
          ? Spacing.md
          : Spacing.sm,
      borderRadius: 8,
      opacity: disabled ? 0.5 : 1,
    },
    text: {
      fontSize:
        size === 'small'
          ? Typography.fontSizes.sm
          : size === 'large'
          ? Typography.fontSizes.lg
          : Typography.fontSizes.base,
      fontWeight: Typography.fontWeights.bold as any,
      textAlign: 'center',
    },
  });

  // Get styles based on the variant
  const getButtonStyles = () => {
    const baseStyles = getBaseButtonStyles();

    switch (variant) {
      case 'primary':
        return {
          container: {
            ...baseStyles.container,
            backgroundColor: disabled ? Colors.gray : Colors.primary,
          },
          text: {
            ...baseStyles.text,
            color: Colors.white,
          },
        };
      case 'secondary':
        return {
          container: {
            ...baseStyles.container,
            backgroundColor: disabled ? Colors.gray : Colors.secondary,
          },
          text: {
            ...baseStyles.text,
            color: Colors.white,
          },
        };
      case 'outline':
        return {
          container: {
            ...baseStyles.container,
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: disabled ? Colors.gray : Colors.primary,
          },
          text: {
            ...baseStyles.text,
            color: disabled ? Colors.gray : Colors.primary,
          },
        };
      case 'text':
        return {
          container: {
            ...baseStyles.container,
            backgroundColor: 'transparent',
          },
          text: {
            ...baseStyles.text,
            color: disabled ? Colors.gray : Colors.primary,
          },
        };
      default:
        return baseStyles; // Return base if variant is not recognized
    }
  };

  // Get final styles based on variant and size
  const {container: containerStyle, text: textStyleVariant} = getButtonStyles();

  return (
    <Pressable
      onPress={!disabled ? onPress : undefined}
      style={[
        style,
        {
          transform: [{scale: 1}],
          shadowColor: Colors.black,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
      ]}
      android_ripple={{color: `${Colors.white}30`}}>
      {icon && <>{icon}</>}
      <Text style={[textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
