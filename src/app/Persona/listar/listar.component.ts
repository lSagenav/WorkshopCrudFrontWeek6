/**
 * aqui estaremos creando las rutas para listar los contactos de la agenda los cuales los traeremos
 * desde el back que a su vez no los trae de la bd
 */
import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../Service/service.service";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  /**
   * aqui estamos creando la logica para captutar los datos de la bd y traerlos y poder
   * pitarlos en el front en la esptaña de listar contactos
   */
  contactos: Array<any> = [];
  constructor(private service: ServiceService) {

  }

  ngOnInit(): void {
    this.service.getContactos().subscribe({
      next: ({data}) => data.forEach((d: any) => this.contactos.push(d))
    })
  }
  }
