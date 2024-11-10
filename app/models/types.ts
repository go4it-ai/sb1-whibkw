export interface Exercise {
    name: string;
    sets: number;
    reps: string;
    weight: string;
    imageUrl: string;
    animatedImageUrl?: string; // Optional animated GIF URL
    description?: string;
    muscleGroup: string;
}
export interface WorkoutDay {
    id: string;
    name: string;
    exercises: Exercise[];
    muscleGroups: string[];
}