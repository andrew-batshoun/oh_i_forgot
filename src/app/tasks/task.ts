//defines task entity

export interface Task{
    id: number | null; 
    description: string;
    dueDate: Date;
    isEdit: boolean ;
    checked: boolean; 
}

export interface NewTask{
    id: number | null; 
    description: string;
    dueDate: Date;
}
