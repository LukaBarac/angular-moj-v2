import { Exercise } from "./exercise.model";

export class TrainingService {
    private exercises: Exercise [] = [
        {
            id: 'running',
            name: 'Morning running',
            duration: 15,
            calories: 1000,
            date: new Date(),
            status: 'done'
        },
        {
            id: 'squats',
            name: 'Midday squats',
            duration: 15,
            calories: 600,
            date: new Date(),
            status: 'done'
        },
        {
            id: 'walking',
            name: 'Afternoon walking',
            duration: 1050,
            calories: 7000,
            date: new Date(),
            status: 'cancelled'
        },
        {
            id: 'running',
            name: 'Evening running',
            duration: 35,
            calories: 4000,
            date: new Date(),
            status: 'cancelled'
        }
        
    ];

    getExercises(){
        return this.exercises;
    }


}