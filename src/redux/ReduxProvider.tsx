import {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {store} from '@app/redux/store';

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
