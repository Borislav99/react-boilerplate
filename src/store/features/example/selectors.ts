import type {RootState} from '@store/config';

export const selectCounter = (state: RootState) => state.example.counter;
