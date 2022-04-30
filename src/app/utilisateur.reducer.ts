import { createReducer, on } from '@ngrx/store';
import { logout,login } from './utilisateur.actions';

export const initialState = undefined;

export const utilisateurReducer = createReducer(
  initialState,
  on(login, (state,val) => val),
  on(logout, (state) => undefined)
);
