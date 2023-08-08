  import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';//Para que el ionic y el angular funcione bien.
  import { IonContent, IonList } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core'; // Importa ChangeDetectorRef para forzar la detección de cambios

  @Component({
    selector: 'app-directos',
    templateUrl: './directos.page.html',
    styleUrls: ['./directos.page.scss'],//Componentes de la pagina directos.
  })
  export class DirectosPage implements OnInit, AfterViewChecked {
    @ViewChild('contentRef', { static: false }) content!: IonContent;
    usuario: any = {}; // Objeto para almacenar los datos del usuario
    directo: any = {}; // Objeto para almacenar los detalles del directo
    imagen: any = {}; // Objeto para almacenar los datos del usuario
    direct: any = {}; // Objeto para almacenar los detalles del directo
  
    nombreCanal: string = '12Manel123';
    descripcion: string = '50000001 subscriptores';//Numero y nombre del canal.
    suscrito: boolean = false;
    notificaciones: boolean = false;
    categoria:string='IRL';
    myuser:string='Tekapps';
    @ViewChild('contentRef', { static: false }) contentRef!: IonContent;
    @ViewChild('messageContainer', { read: ElementRef, static: false }) messageContainerRef!: ElementRef;
    @ViewChild('messageList', { static: false }) messageList!: IonList;
    // Resto de tu código
    getColorForUser(username: string) {
      return username === 'Tekapps' ? 'orange' : 'default';
    }
  
  
    mensajes: any[] = [
      { user:"User1",texto: 'Hola', propio: true },
      { user:"User2",texto: 'Eres lo mejor!', propio: false },
      { user:"User3",texto: 'ffffffff', propio: true },
      { user:"User1",texto: '¿Y tú?', propio: true },
      { user:"User3",texto: 'También bien, gracias', propio: false },
    ];//Funcionalidad del chat.
    showBackButton: boolean = false;
    nuevoMensaje: string = '';//Variables
    coloresUsuarios: { [user: string]: string } = {
     
    }
    constructor(
      private route: ActivatedRoute,
      private http: HttpClient,
      private cdr: ChangeDetectorRef
    ) {}
    ngAfterViewChecked() {
      this.scrollToBottom();
    }
  
    ngOnInit() {
      this.route.queryParams.subscribe((params) => {
        this.nombreCanal = params['username'];
        this.obtenerDatosUsuario();
        // Resto de tu código
      });
    }
    obtenerDatosUsuario(): void {
      this.http.get<any[]>('assets/channels.json').subscribe((data) => {
        const usuario = data.find((c) => c.name === this.nombreCanal);
        if (usuario) {
          this.usuario = usuario;
          this.imagen = usuario.image;
          this.descripcion = usuario.descripcion;
          this.categoria = usuario.category || '';
          this.direct = usuario.direct || '';
          this.suscrito = false;
        }
      });
    }
  
    onKeyPress(event: KeyboardEvent) {
      if (event.keyCode === 13 && !event.shiftKey) {
        event.preventDefault(); // Evita el comportamiento predeterminado del Enter (evitar salto de línea)
        this.enviarMensaje();
      }
    }
    enviarMensaje() {
      if (this.nuevoMensaje.trim() !== '') {
        const mensaje = { user: this.myuser, texto: this.nuevoMensaje, propio: true };
        this.mensajes.push(mensaje);
        this.nuevoMensaje = ''; // Limpiar el campo de entrada de mensajes después de enviarlo
        console.log('Mensajes:', this.mensajes); // Agrega esta línea para verificar los mensajes
      }
    }
      
    
    scrollToBottom() {
      const messageContainer = this.messageContainerRef.nativeElement;
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
    
    toggleBackButton() {
      this.showBackButton = !this.showBackButton;
    }
    
    hideBackButton() {
      setTimeout(() => {
        this.showBackButton = false;
      }, 10000);//Para que el boton se active y desaparezca.
    }
    alternarSuscripcion() {
      this.suscrito = !this.suscrito;//Saber si esta subsctiro o no.
    }
    
    alternarNotificaciones() {
      this.notificaciones = !this.notificaciones;//Alternanza de notificaciones.
    }
    obtenerIcono(): string {
      return this.suscrito ? 'heart' : 'heart-outline';//Corazon para decir "me gusta"
    }
  
    obtenerTextoBoton(): string {
      return this.suscrito ? 'Desuscribirse' : 'Subscribirse';//Decir si está subscrito o no.
    }
  
  
  
    
  
   
    }
    