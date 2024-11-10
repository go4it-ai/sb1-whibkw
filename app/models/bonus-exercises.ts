import { Exercise } from './types';
import { bicepsExercises } from './exercises/biceps';
import { tricepsExercises } from './exercises/triceps';
import { shouldersExercises } from './exercises/shoulders';
import { chestExercises } from './exercises/chest';
import { backExercises } from './exercises/back';
import { legsExercises } from './exercises/legs';
import { coreExercises } from './exercises/core';

export const bonusExercisePool: { [key: string]: Exercise[] } = {
    biceps: bicepsExercises,
    triceps: tricepsExercises,
    shoulders: shouldersExercises,
    chest: chestExercises,
    back: backExercises,
    legs: legsExercises,
    core: coreExercises
};