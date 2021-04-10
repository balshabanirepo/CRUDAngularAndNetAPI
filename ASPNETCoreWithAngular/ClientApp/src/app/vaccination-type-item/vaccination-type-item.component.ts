import { Component, OnInit } from '@angular/core';
import { VaccinationTypeService } from '../vaccination-type.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vaccination-type-item',
  templateUrl: './vaccination-type-item.component.html',
  styleUrls: ['./vaccination-type-item.component.css']
})
export class VaccinationTypeItemComponent implements OnInit {

  constructor(private http:VaccinationTypeService) { }

  ngOnInit()
  {
    this.http.vaccinationTypeInstance={
      id: 0,
        name:null
    }
  }
  submit(form: NgForm)
  {
    if (this.http.vaccinationTypeInstance.id==0) {
      this.http.submitNewType().subscribe(res => {
        this.http.getAllVaccinationTypes()
      },
        err => {
          console.log(err)
        }
      )
    }
    else
    {
      this.http.editType().subscribe(res => {
        this.http.getAllVaccinationTypes()
      },
        err => {
          console.log(err)
        }
      )
    }

  }
  


}
