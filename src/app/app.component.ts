import { Component, OnInit } from '@angular/core';
import { faX,faEdit,faSave , faCheckSquare, faTrash  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //**icons */
  faX =  faX;
  faEdit = faEdit;
  faSave = faSave;
  faTrash = faTrash
  faCheckSquare = faCheckSquare;
  //*** */
  title = 'AngularTask';
  divShow : boolean = false;
  inputValue : string =''; 

  searchText : ''
  tasks = [
    {
      myTask :   'clean my room',
      isChecked : false,
      isEditable : false
    }
  ]
////////////////
  ngOnInit(): void {
   
   const savedTodo = localStorage.getItem('todo');
   if(savedTodo) this.tasks = JSON.parse(savedTodo)
}

  addTask(){
    this.tasks.push({
      myTask : this.inputValue,
      isChecked : false,
      isEditable : false
    })
    this.saveMyTodoList();
    this.inputValue = ''

  }
  checked(index:number){
    this.tasks[index].isChecked = true;
    this.saveMyTodoList();
  }

  removeTask(index : number){
    this.tasks.splice(index,1);
    this.saveMyTodoList();

  }

  updateTask(index: number){
    this.tasks[index].isEditable = true;

  }
  saveTask(index:number,valueUpdated:string){
    this.tasks[index].myTask = valueUpdated;
    this.tasks[index].isEditable = false;
    this.saveMyTodoList();

  }
  /////////////////////
  saveMyTodoList() : void {
    localStorage.setItem('todo',JSON.stringify(this.tasks))
  }

 
}

