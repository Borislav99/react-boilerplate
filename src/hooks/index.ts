/* eslint-disable @typescript-eslint/no-explicit-any */
import type {ThunkDispatch, Action} from '@reduxjs/toolkit';
import {useDispatch, type TypedUseSelectorHook, useSelector} from 'react-redux';
import type {AppDispatch, RootState} from '@store/config';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useThunkDispatch = () => useDispatch<ThunkDispatch<RootState, unknown, Action<any>>>();
