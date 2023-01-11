import { Injectable } from "@angular/core";
import { Task } from "./task";


@Injectable({
    providedIn: 'root'
})

export class TaskService{

    getTasks(): Task[]{
        return [
            {
                "id": 1,
                "description": "Get Groceries",
                "date": new Date(2022, 12, 1)
              },
          
              {
                "id": 2,
                "description": "Walk The dog",
                "date": new Date('') 
              }

        ]
    }

}