import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideMenuBar } from '../../model/side-menu-bar';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit{

    constructor(private router : Router){}

        userChoice : any[];
        type : string;


    ngOnInit(): void {
        this.userChoice = SideMenuBar.menus;
        this.type= sessionStorage.getItem("userType");
        console.log(this.type)
        console.log(this.userChoice)
    }

    navigateTo(link : string){
            this.router.navigateByUrl('/user-dashboard/'+this.type+'/'+link);
    }
}
