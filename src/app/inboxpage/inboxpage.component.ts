import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inboxpage',
  templateUrl: './inboxpage.component.html',
  styleUrls: ['./inboxpage.component.css']
})

export class InboxpageComponent {
  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
 
  increment() {
   this.count++;
   this.countChange.emit(this.count);
  }
  decrement() {
    this.count--;
    this.countChange.emit(this.count);
   }
   clear(): void{
    this.count=0
    this.countChange.emit(this.count)
   }
  isDisabled = false;
  variable ="Bindable";
  clickCount=0
  clickMe(): void {
    this.clickCount++;
  }
  nameChanged(arg: string): void{
    console.log("modelchanged " + arg);

  }
  name1Changed(arg: any): void{
    console.log("chnqged value:" + arg.target.value)
  }
 
}
