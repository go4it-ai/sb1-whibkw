import { NavigatedData, Page } from "@nativescript/core";
import { WorkoutListViewModel } from "../view-models/workout-list-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    page.bindingContext = new WorkoutListViewModel();
}

export function onDaySelect(args) {
    const view = args.view;
    const context = view.bindingContext;
    const page = view.page;
    
    page.frame.navigate({
        moduleName: "views/workout-detail-page",
        context: context
    });
}