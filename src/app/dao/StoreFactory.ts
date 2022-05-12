// import { Factory } from "./factory";
// // import { Article } from "./article";
// // import { Comment } from "./comment";
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { login, logout } from '../store/utilisateur.action';
// import { Article } from "./article";
//
// export class StoreFactory implements Factory {
//   private store: Store<{ utilisateur: string }>;
//   private _userName: Observable<string>;
//
//   constructor() {
//     this._userName = null;
//   }
//   get userName(){
//     return this.store.select('utilisateur');
//   }
//   getArticles(): Article[] {
//     return [];
//   }
//
//   login(userName: string): boolean {
//     console.log(userName);
//     console.log(this.store);
//     this.store.dispatch(login());
//     return false;
//   }
//
//   logout(): void {
//     this.store.dispatch(logout());
//   }
//
//
// }
