import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth:AngularFireAuth) { }
  registerUser(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword( email,password);
  }
  loginUser(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  loginWithGoogle() {
    return this.afAuth.signInWithPopup(new GoogleAuthProvider());
  }
  /*deleteUser(email: string, password: string){
    return this.afAuth.deleteUserWithEmailAndPassword(email, password);
  }*/
}
