//defines task entity

export interface Task{
    id: number | null; 
    description: string;
    dueDate: string;
    isEdit: boolean ;
    checked: boolean; 
}
