import { Component, OnInit } from '@angular/core';
import { CustomerInfoService } from '../services/customer-info.service';
import { CustomerInfo } from '../models/customer-info';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  constructor(private customerInfoService: CustomerInfoService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.populateCustomerInfos();
  }

  displayedColumns: string[] = ['custcode', 'custname', 'address1', 'address2','phone','mobile','email', 'action'];
  dataSource: CustomerInfo[] = [];

  private populateCustomerInfos(){

    this.customerInfoService.getCustomerInfos()
    .subscribe(data => {
      this.dataSource = data;
      console.log(data);
    },
    err => {
      console.error(err);
    });
  }

  newCustomerInfo(){

    this.router.navigate(['dashboard','customer-info','new']);
  }

  editBtnHandler(id){
    this.router.navigate(['dashboard','customer-info',id]);
  }

  deleteBtnHandler(id){
    // console.log('Delete the given row',id);
    this.customerInfoService.deleteCustomerInfo(id)
    .subscribe(data => {
      console.log(data);

      this.snackBar.open('Customer Info deleted successfully', 'Success', {
        duration: 2000
      });

      this.populateCustomerInfos();
    },
    err => console.error(err));
  }

}
