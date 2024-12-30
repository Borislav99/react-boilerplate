import {useAppDispatch, useAppSelector} from '@hooks/index';
import {setCounter} from '@features/example/exampleSlice';
import {selectCounter} from '@features/example/selectors';

const App = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCounter);

  const handleClick = () => {
    dispatch(setCounter(counter + 1));
  };

  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <p data-testid="counter">{counter}</p>
    </div>
  );
};

export default App;
