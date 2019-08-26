import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerInfoService } from '../../services/customer-info.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerInfo } from '../../models/customer-info';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-customer-info-form',
  templateUrl: './customer-info-form.component.html',
  styleUrls: ['./customer-info-form.component.scss']
})
export class CustomerInfoFormComponent implements OnInit {

  customerInfoObj: CustomerInfo;
  custInfoForm: FormGroup;
  constructor(private fb: FormBuilder,
              private custInfoService: CustomerInfoService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
    this.setCustomerInfoToForm();
  }
  
  setCustomerInfoToForm() {
    
    this.route.params
    .subscribe(param => {
      
      let id = param['id'];

      if(!id){
        return;
      }

      this.custInfoService.getCustomerInfo(id)
      .subscribe(data =>{
        this.customerInfoObj = data[0];

        console.log(this.customerInfoObj);

        this.custInfoForm.patchValue(this.customerInfoObj);
      }, err => console.error(err));
    }, err => console.error(err));
  }

  createForm(){
    this.custInfoForm = this.fb.group({
      custcode: ['',Validators.required],
      custname: ['',Validators.required],
      address1: ['',Validators.required],
      address2: ['',Validators.required],
      phone: ['',Validators.required],
      mobile: ['',Validators.required],
      email: ['',Validators.email],
    });

  }

  onSubmit() {

    //update for customer Object
    if (this.customerInfoObj) {

      this.custInfoService.updateCustomerInfo(this.customerInfoObj.id, this.custInfoForm.value)
        .subscribe(data => {

          console.log(data);

          this.snackBar.open("Customer Info Updated SucssFully", 'Success', {
            duration: 2000
          });

          this.router.navigate(['dashboard', 'customer-info']);
        }, err => console.error(err));

    } else {
      if (this.custInfoForm.valid) {
        this.custInfoService.createCustomerInfo(this.custInfoForm.value)
          .subscribe(data => {

            console.log(data);
            this.custInfoForm.reset();

            this.snackBar.open("Customer Info created SucssFully", 'Success', {
              duration: 2000
            });
            
            this.router.navigate(['dashboard', 'customer-info'])
          },
            err => {
              console.error(err);
            });
      }
      else {
        console.error('The input is not valid');
      }
    }
  }

}
