import { Component ,OnInit} from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


// cascade select
countries:any[]=[];
selectedCity:any;

ngOnInit(): void {
  this.countries = [
    {
        name: 'India',
        code: 'Ind',
        states: [
            {
                name: 'TamilNadu',
                cities: [
                    { cname: 'Coimbatore', code: 'Ind-Cbe' },
                    { cname: 'Chennai', code: 'Ind-Che' },
                    { cname: 'Madurai', code: 'Ind-Mad' }
                ]
            },
            {
                name: 'Kerala',
                cities: [
                    { cname: 'Kochin', code: 'Ind-Koc' },
                    { cname: 'Trivandrum', code: 'Trivandrum' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
];
}

// age calculation
  date!: Date;
  age():void{
    try{console.log(this.date);
        let todaydate:Date=new Date();
        var age=todaydate.getFullYear()-this.date.getFullYear();
        this.messageService.add({summary: 'You are '+age+' years old'})}
    catch{
        alert("Enter you dob")
    }
    
  }

  constructor(private messageService: MessageService) {

  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Signed Up Successfully', detail: 'Thank You For Signing Up' });
    
  }
}
