import { Exercise } from '../types';

export const tricepsExercises: Exercise[] = [
    {
        name: "Tríceps Testa com Halteres",
        sets: 3,
        reps: "12-15",
        weight: "8kg",
        imageUrl: "~/assets/images/exercises/triceps/triceps-testa.png",
        description: "Deite-se no banco, segure os halteres acima da testa e flexione os cotovelos.",
        muscleGroup: "triceps"
    },
    {
        name: "Tríceps Mergulho em Banco",
        sets: 3,
        reps: "12-15",
        weight: "Peso Corporal",
        imageUrl: "~/assets/images/exercises/triceps/triceps-mergulho.png",
        description: "Apoie as mãos em um banco e desça controladamente, mantendo os cotovelos para trás.",
        muscleGroup: "triceps"
    }
];