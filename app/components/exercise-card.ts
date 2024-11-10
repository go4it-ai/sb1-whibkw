import { StackLayout } from '@nativescript/core';

export class ExerciseCard extends StackLayout {
    constructor() {
        super();
        // Load the component's XML template
        const template = require('./exercise-card.xml');
        this.loadTemplate(template);
    }

    loadTemplate(template: string) {
        this.content = template;
    }
}