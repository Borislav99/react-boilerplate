import React, {type PropsWithChildren} from 'react';
import {render} from '@testing-library/react';
import type {RenderOptions} from '@testing-library/react';
import {Provider} from 'react-redux';
import {storeSetup, type AppStore, type RootState} from '../store/config';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(ui: React.ReactElement, extendedRenderOptions: ExtendedRenderOptions = {}) {
  const {preloadedState = {}, store = storeSetup(preloadedState), ...renderOptions} = extendedRenderOptions;

  const Wrapper = ({children}: PropsWithChildren) => <Provider store={store}>{children}</Provider>;

  return {
    store,
    ...render(ui, {wrapper: Wrapper, ...renderOptions}),
  };
}
