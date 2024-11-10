import { Exercise } from '../types';

export const coreExercises: Exercise[] = [
    {
        name: "Prancha (Plank)",
        sets: 3,
        reps: "30-60 segundos",
        weight: "Peso Corporal",
        imageUrl: "~/assets/images/exercises/core/plank.png",
        description: "Engaje o abdômen e mantenha o corpo alinhado.",
        muscleGroup: "core"
    },
    {
        name: "Russian Twist",
        sets: 3,
        reps: "20 (10 para cada lado)",
        weight: "Peso Corporal",
        imageUrl: "~/assets/images/exercises/core/russian-twist.png",
        description: "Gire o tronco de forma controlada.",
        muscleGroup: "core"
    },
    {
        name: "Abdominal Invertido",
        sets: 3,
        reps: "15-20",
        weight: "Peso Corporal",
        imageUrl: "~/assets/images/exercises/core/abdominal-invertido.png",
        description: "Controle o movimento ao levantar e descer as pernas.",
        muscleGroup: "core"
    }
];