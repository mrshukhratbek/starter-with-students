import { Public } from './public-app';
import { Private } from './private-app';
import { useAuth } from '@hooks/';

export const App = () => {
  const [token] = useAuth(true);

  if (token) {
    return <Private />;
  }

  return <Public />;
};
