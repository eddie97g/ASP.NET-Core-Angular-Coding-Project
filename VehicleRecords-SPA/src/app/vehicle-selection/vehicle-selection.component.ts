import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicle-selection',
  templateUrl: './vehicle-selection.component.html',
  styleUrls: ['./vehicle-selection.component.css']
})
export class VehicleSelectionComponent implements OnInit {

  makes = ['Ford', 'Chevrolet', 'Dodge'];
  years = [];
  models = ['Mustang', 'Corvette', 'Charger'];
  colors = ['White', 'Red', 'Blue', 'Black', 'Green'];
  miles: any;
  isModelDisabled = true;
  makeValue: any;
  modelValue: any;
  yearValue: any;
  colorValue: any;
  milesValue: any;
  vehicleRecords: any;
  displayedColumns: string[] = ['id', 'name', 'year', 'make', 'model', 'color', 'miles', 'description'];
  date: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllRecords();
    this.getYears();
  }

  handleMakeChange() {
    if (this.makeValue != null) {
      this.isModelDisabled = true;
    }
    if (this.makeValue === 'Chevrolet') {
      this.modelValue = 'Corvette';
    }
    if (this.makeValue === 'Ford') {
      this.modelValue = 'Mustang';
    }
    if (this.makeValue === 'Dodge') {
      this.modelValue = 'Charger';
    }
  }
  handleModelChange() {
    if (this.modelValue === 'Mustang') {
      this.makeValue = 'Ford';
    }
    if (this.modelValue === 'Charger') {
      this.makeValue = 'Dodge';
    }
    if (this.modelValue === 'Corvette') {
      this.makeValue = 'Chevrolet';
    }
  }
  getAllRecords() {
    this.http.get('http://localhost:5000/api/vehicle/all-records').subscribe(response => {
      this.vehicleRecords = response;
      console.log(this.vehicleRecords);
    }, error => {
      console.log(error);
    });
  }

  getYears() {
    for (let i = 1970; i <= 2019; i++) {
      this.years.push(i.toString());
    }
  }
  clearFilters() {
    this.makeValue = '';
    this.modelValue = '';
    this.yearValue = '';
    this.colorValue = '';
    this.miles = '';

  }


}
