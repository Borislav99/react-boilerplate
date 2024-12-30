import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';
import {Provider} from 'react-redux';
import {store} from '@store/config';
import AppRouter from '@router/index';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <Provider store={store}>
    <StrictMode>
      <AppRouter />
    </StrictMode>
  </Provider>
);
