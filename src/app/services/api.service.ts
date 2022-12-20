import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mycontact } from 'src/models/mycontact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl:string = 'http://localhost:3000/contacts'
  constructor(private http:HttpClient) { }
  allcontacts():Observable<mycontact> {
    return this.http.get(this.baseurl)
  }
  viewcontact(contactid:string){
    return this.http.get(`${this.baseurl}/${contactid}`)
  }
  getgroupname(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }
  getallgroups(){
    return this.http.get('http://localhost:3000/groups')
  }
  addcontact(contactbody:any){
    return this.http.post(this.baseurl,contactbody)
  }
  deletecontact(contactid:any){
    this.http.delete(`${this.baseurl}/${contactid}`)
  }
}
