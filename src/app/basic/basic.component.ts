import { Component } from '@angular/core';
import { users } from '../Constant';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  componentName: string = 'Basic';
  showTextSection: Boolean = true;
  showText: boolean = true;
  numbers:string[] = ['one','two','three','four','five','six','seven'];
  users:any = users;
  Name:string='mani';

  showHideText = () => {
    console.log('Button Clicked');
    this.showTextSection = !this.showTextSection;
  }

  showHide() {
   this.showText = !this.showText;
  }

  submitName(value:string) {
    console.log(value);
  }

}
