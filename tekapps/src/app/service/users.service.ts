import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export default interface User {
  id?: string;
  name: string;
  image: string;
  isLive: boolean;
  direct?:string;
  directName?:string;
  grupo?: string;
  videos?: Array<{ nombre: string; imagen: string; visitas: number }>;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore) { }

  addUser(user: User) {
    const placeRef = collection(this.firestore, 'users');
    return addDoc(placeRef, user);
  }

  getUsers(): Observable<User[]> {
    const placeRef = collection(this.firestore, 'users');
    return collectionData(placeRef, { idField: 'id' }) as Observable<User[]>;
  }

  deleteUser(user: User) {
    const userDocRef = doc(this.firestore, `users/${user.id}`);
    return deleteDoc(userDocRef);
  }

}
