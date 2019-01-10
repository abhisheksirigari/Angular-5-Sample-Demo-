import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(
    private userService: UserDataService
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe( result => {
      this.user = result;
      console.log(result);
    });
  }

}
