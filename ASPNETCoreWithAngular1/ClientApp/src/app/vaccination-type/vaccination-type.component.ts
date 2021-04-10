import { Component, OnInit } from '@angular/core';
import { VaccinationTypeService } from '../vaccination-type.service';

@Component({
  selector: 'app-vaccination-type',
  templateUrl: './vaccination-type.component.html',
  styleUrls: ['./vaccination-type.component.css']
})
export class VaccinationTypeComponent implements OnInit {

  constructor(private service:VaccinationTypeService) { }

  ngOnInit() {
    this.service.getAllVaccinationTypes()
  }
  fillTypeInfo(listItem) {
    this.service.vaccinationTypeInstance.id = listItem.id
    this.service.vaccinationTypeInstance.name = listItem.name

  }

  deleteType(id)
  {
    if (!confirm('are you sure'))
    {
      return;
    }

    this.service.vaccinationTypeInstance.id = id
    this.service.deleteType().subscribe(res =>
    {
      this.service.getAllVaccinationTypes()
    },
      err =>
      {
        console.log(err)
      }
    )
  }
  


}
