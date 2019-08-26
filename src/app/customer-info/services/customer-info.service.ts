import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerInfo } from '../models/customer-info';

const BASE_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class CustomerInfoService {

  constructor(private httpClient: HttpClient) { }

  getCustomerInfos(): Observable<CustomerInfo[]>{
    return this.httpClient.get<CustomerInfo[]>(`${BASE_URL}/customerinfo`);
  }

  createCustomerInfo(body: CustomerInfo): Observable<CustomerInfo>{
    return this.httpClient.post<CustomerInfo>(`${BASE_URL}/customerinfo`,body);
  }

  getCustomerInfo(id: number): Observable<CustomerInfo[]>{
    return this.httpClient.get<CustomerInfo[]>(`${BASE_URL}/customerinfo/${id}`);
  }

  updateCustomerInfo(id: number, body: CustomerInfo): Observable<CustomerInfo>{
    return this.httpClient.put<CustomerInfo>(`${BASE_URL}/customerinfo/${id}`,body);
  }

  deleteCustomerInfo(id: number): Observable<CustomerInfo>{
    return this.httpClient.delete<CustomerInfo>(`${BASE_URL}/customerinfo/${id}`);
  }
}
