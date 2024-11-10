import { Observable } from "@nativescript/core";
import { workoutPlan } from "../models/workout";

export class WorkoutListViewModel extends Observable {
    constructor() {
        super();
        this.set("workoutDays", workoutPlan);
    }
}