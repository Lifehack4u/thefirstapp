/**
 * Signing of declaration of consent.
 * Check the tasks / fix
 * Questions
 * Continue Todo app
 *      Todolist
 *      Adding Todo item
 *      Delete todo item
 *      Add validations
 *      Data structure
 */



 function createTodo()
 {
 
     let input = document.getElementById('name');
     let tarea = document.getElementById('description');
     let listEl = createTodoElement( input.value );
     let todolist = document.getElementById('todoList');
     todolist.append( listEl );
 
     console.log(" input : ", input.value);
     console.log(" txtarae : ", tarea.value);
 }
 
 function createTodoElement(value)
 {
     let h5 = document.createElement('h5');
     let p = document.createElement('p');
 
     h5.innerText = "Name";
     p.innerHTML = "<span>Description</span>";
 
     let li = document.createElement('li');
     li.classList.add('list-group-item');
     li.append( h5 );
     li.append( p );
 
     return li;
 
 }
/*
 function myFunction() {
    var x = document.getElementById("myInput").value;
    document.getElementById('kwilli').innerHTML = "You wrote: " + x;
  }

  function myFunction("demo") {
    document.getElementById("demo").innerHTML = x
  }*/