import { Component, OnInit } from '@angular/core';
import { DataService } from './chat/shared/services/data.service';
import { FormData } from './chat/shared/model/data';


@Component({
  selector: 'tcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formData: FormData;
  ngOnInit(): void {  
    this.initModel();
  }

 constructor(private dataService: DataService) {
    }
    private initModel(): void {    
    this.formData = this.dataService.getFormData();
  }
}
