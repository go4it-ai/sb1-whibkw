import { WorkoutDay } from './types';
import { bicepsExercises } from './exercises/biceps';
import { tricepsExercises } from './exercises/triceps';
import { shouldersExercises } from './exercises/shoulders';
import { chestExercises } from './exercises/chest';
import { backExercises } from './exercises/back';
import { legsExercises } from './exercises/legs';
import { coreExercises } from './exercises/core';

export const workoutPlan: WorkoutDay[] = [
    {
        id: "day1",
        name: "Dia 1: Braços e Ombros",
        exercises: [
            { ...bicepsExercises[0] },
            { ...tricepsExercises[0] },
            { ...shouldersExercises[0] },
            { ...bicepsExercises[1] },
            { ...shouldersExercises[1] }
        ],
        muscleGroups: ["biceps", "triceps", "shoulders"]
    },
    {
        id: "day2",
        name: "Dia 2: Peito e Costas",
        exercises: [
            { ...chestExercises[0] },
            { ...chestExercises[1] },
            { ...backExercises[0] },
            { ...backExercises[1] }
        ],
        muscleGroups: ["chest", "back"]
    },
    {
        id: "day3",
        name: "Dia 3: Core com Elementos de Pernas",
        exercises: [
            { ...coreExercises[0] },
            { ...coreExercises[1] },
            { ...legsExercises[0] },
            { ...coreExercises[2] }
        ],
        muscleGroups: ["core", "legs"]
    }
];