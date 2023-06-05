import {GradientProvider} from './src/context';
import {HomeScreen} from './src/screens';

export const App = () => {
  return (
    <GradientProvider>
      <HomeScreen />
    </GradientProvider>
  );
};
