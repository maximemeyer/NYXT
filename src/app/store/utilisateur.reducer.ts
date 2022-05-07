import { createReducer, on } from '@ngrx/store';
import { login,logout } from './utilisateur.action';

export const initialState = null;

export const utilisateurReducer = createReducer(
  initialState,
  on(login, (state,utilisateur) => utilisateur),
  on(logout, (state) => null),
);

export interface State {
  utilisateur: any;
}
