import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class StaffService {
    
    constructor(private http: Http) { }

    getStaff() {
        return this.http.get('api/Values/GetStaff')
            .map(response => response.json());
    }
}
