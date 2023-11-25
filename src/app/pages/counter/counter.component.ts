import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  sugam: string | number=0

  ngOnInit(){
    console.log('logged from onInit');
    
  }

  counterAdd() {
    (this.sugam as number)++;
  }

  counterReset() {
    this.sugam = 0
  }
}
