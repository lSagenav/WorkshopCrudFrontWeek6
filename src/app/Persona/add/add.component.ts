import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../../Service/service.service";
import {Persona} from "src/app/Modelo/Persona";
import {Person} from "@angular/cli/utilities/package-json";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) {
  }

  /**
   * aqui creamos lo que es el cuerpo del formulario con el cual enviaremos los datos de los
   * nuevos contactos a la bd atravez de del backend
   */
  persona: Persona = {
    id:0,
    nombre:"",
    numberCell:0,
    email:"",
    dataBorn:""
  }
   formulario = new FormGroup({
     name: new FormControl("",[Validators.required]),
     cel: new FormControl("",[Validators.required]),
     email: new FormControl("",[Validators.required,Validators.email]),
     born: new FormControl("",[Validators.required]),

   })


  ngOnInit() {

  }

  /**
   * aqui tenemos el contructor donde tomamos los datos de los contactos y los enviamos a la bd
   * @constructor
   */
  Guardar() {

    this.persona.nombre = this.formulario.value.name
    this.persona.dataBorn = this.formulario.value.born
    this.persona.numberCell = this.formulario.value.cel
    this.persona.email = this.formulario.value.email

    this.service.createPersona(this.persona)
      .subscribe(
        {
          next: () => {
            alert("Se agrego con exito....!!!");
            this.router.navigate(["listar"]);
          }
        }
      )
  }
}
