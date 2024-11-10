import { NavigatedData, Page } from "@nativescript/core";
import { WorkoutDetailViewModel } from "../view-models/workout-detail-view-model";
import 'nativescript-gif';


export function onNavigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    const workoutDay = page.navigationContext;
    page.bindingContext = new WorkoutDetailViewModel(workoutDay);
}