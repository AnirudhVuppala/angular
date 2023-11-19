import { Component } from '@angular/core';

@Component({
  selector: 'my-learnings',
  templateUrl: './learn.component.html',
})
export class MyLearningComponent {
  user_input:string = "hey";

  // User_Input(given_data: HTMLTextAreaElement)
  // {
  //   this.user_input=given_data.value;
  // }
  data =[
{id:1,studname:"Aish"},
{id:2,studname:"Honey"}

  ];
}