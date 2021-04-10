import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VaccinationType } from './vaccination-type.model';
@Injectable({
  providedIn: 'root'
})
export class VaccinationTypeService
{
  url: string = "api/VaccinationTypesRepositories"

  result: VaccinationType[]
  vaccinationTypeInstance: VaccinationType
  constructor(private http: HttpClient)
{
    }
  getAllVaccinationTypes()
  {
    
  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    this.http.get(this.url,{'headers': headers }).toPromise().then
      (
        res =>
        {
          this.result = res as VaccinationType[];
        }
      )
  }
  submitNewType() {

   return (this.http.post(this.url,this.vaccinationTypeInstance))
  }
  editType() {

    return (this.http.put(this.url+'/'+this.vaccinationTypeInstance.id, this.vaccinationTypeInstance))
  }
  deleteType() {

    return (this.http.delete(this.url + '/' + this.vaccinationTypeInstance.id))
  }
}
