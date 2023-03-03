import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counterapp';

  countNumber = 0;
  resetbtn()
  {
    this.countNumber = 0;
  }

  increasebtn(){
    this.countNumber = this.countNumber +1;
  }

  decreasebtn(){
    this.countNumber = this.countNumber -1; 
  }
} 
