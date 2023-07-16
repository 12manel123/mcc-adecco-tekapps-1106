import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, } from '@angular/forms';
import { Router, RouterFeature } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  formularioLogin: FormGroup;
  usuarios!: any[];
  loading = true;

  constructor(public http: HttpClient, private router: Router) {
    this.formularioLogin = new FormGroup({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.http.get<any>('assets/usuarios.json').subscribe(
      (data: any[]) => {
        this.usuarios = data;
        this.loading = false; // Los usuarios se han cargado, no hay más necesidad de cargarlos
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
        this.loading = false; // En caso de error, también detenemos el "loading"
      }
    );
  }

  onIngresar() {
    if (this.formularioLogin.valid) {
      const nombre = this.formularioLogin.value.nombre;
      const password = this.formularioLogin.value.password;
  
      const usuarioEncontrado = this.usuarios.find(
        (usuario) => usuario.nombre === nombre && usuario.password === password
      );
  
      if (usuarioEncontrado) {
        this.router.navigateByUrl('/tabs/tab1');
      } else {
        alert('Usuario o contraseña incorrectos.');
      }
    } else {
      alert('Debes rellenar todos los campos.');
    }
  }


}
