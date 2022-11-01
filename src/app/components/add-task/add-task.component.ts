import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UlService } from 'src/app/service/ul.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
@Output() onAddTask: EventEmitter<Task> = new EventEmitter
text:string = '';
day:string = '';
reminder:boolean=false;
showAddTask:boolean = false;
subscription: Subscription
  constructor(
    private ulService:UlService
  ) { 
    this.subscription=this.ulService.onToggle().subscribe(value =>this.showAddTask=value)
  }

  ngOnInit(): void {
  }
onSubmit(){
  if(this.text.length ==0){
    alert( "Pleace add a task");
    return
  }
const newTask={
text:this.text,
day:this.day,
reminder:this.reminder
};
this.onAddTask.emit(newTask);

}
}
