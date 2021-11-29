import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { listMunicipiosI } from '../../models/listMunicipios.interface';
import {ApiService} from '../../services/api/api.service';
import {FormGroup,FormControl,Validator} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private api:ApiService) { }

  datosMunicipios:listMunicipiosI;
  editForm = new FormGroup({
    consecutivoInterno: new FormControl(''),
    nombre: new FormControl(''),
    departamento: new FormControl(''),
    codigoDane: new FormControl(''),
    distrito: new FormControl(''),
  });

  ngOnInit(): void {
    let consecutivoInterno = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.GetSingleMunicipio(consecutivoInterno).subscribe(data =>{
      this.datosMunicipios = data;
      this.editForm.setValue({
        'consecutivoInterno': this.datosMunicipios.consecutivoInterno,
        'nombre' : this.datosMunicipios.nombre,
        'departamento' : this.datosMunicipios.departamento,
        'codigoDane' : this.datosMunicipios.codigoDane,
        'distrito' : this.datosMunicipios.distrito
      });
    });
  }

  postForm(id:any, form:listMunicipiosI){
    this.api.PutMunicipio(id, form).subscribe(data => {
      console.log(data);
    })
  }

}
