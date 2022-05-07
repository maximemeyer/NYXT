import { createAction,props } from '@ngrx/store';

export const login = createAction('[Utilisateur Component] login',props<any>());
export const logout = createAction('[Utilisateur Component] logout');
