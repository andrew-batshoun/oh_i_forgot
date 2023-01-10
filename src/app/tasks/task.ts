//defines task entity

export interface Task{
    id: number | null; 
    description: string;
    date: Date;
}

export interface TaskResolved{
    task: Task | null; 
    error?: string; 
}