import { Observable } from "@nativescript/core";
import { WorkoutDay, Exercise, bonusExercisePool } from "../models/workout";

export class WorkoutDetailViewModel extends Observable {
    constructor(workoutDay: WorkoutDay) {
        super();
        this.set("name", workoutDay.name);
        
        // Set regular exercises
        const regularExercises = [...workoutDay.exercises];
        this.set("regularExercises", regularExercises);
        
        // Get bonus exercises
        const bonusExercises = this.getRandomBonusExercises(workoutDay.muscleGroups, 2);
        
        this.set("hasBonusExercises", bonusExercises.length > 0);
        this.set("bonusExercises", bonusExercises);
    }

    private getRandomBonusExercises(muscleGroups: string[], maxCount: number): Exercise[] {
        const bonusExercises: Exercise[] = [];
        const count = Math.floor(Math.random() * maxCount) + 1; // Random 1-2 exercises
        
        // Create a pool of all possible exercises for the given muscle groups
        const availableExercises = muscleGroups.flatMap(group => 
            bonusExercisePool[group] || []
        );

        // Randomly select exercises
        while (bonusExercises.length < count && availableExercises.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableExercises.length);
            const exercise = availableExercises.splice(randomIndex, 1)[0];
            bonusExercises.push(exercise);
        }

        return bonusExercises;
    }
}