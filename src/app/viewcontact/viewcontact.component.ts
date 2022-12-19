import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {
  contactid:string=''
  contact:any
  groupid:any
  groupname:any
constructor(private activatedroute:ActivatedRoute, private api:ApiService) { }
ngOnInit(): void {
  this.activatedroute.params.subscribe((data:any)=>{
    this.contactid = data.contactId    
  })
  this.api.viewcontact(this.contactid).subscribe((data:any)=>{
    this.contact = data
    this.groupid = data.groupId
    this.api.getgroupname(this.contact.groupId).subscribe((result:any)=>{
      this.groupname = result.name 
  })
  })
}
}
