import {Colors, Layout} from '@app/theme';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = {flex: Layout.flex.full, backgroundColor: Colors.white};

const SafeAreaViewWrapper: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaViewWrapper;
