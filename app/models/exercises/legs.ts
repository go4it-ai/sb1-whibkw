import { Exercise } from '../types';

export const legsExercises: Exercise[] = [
    {
        name: "Agachamento com Halteres",
        sets: 3,
        reps: "15-20",
        weight: "8kg",
        imageUrl: "~/assets/images/exercises/legs/agachamento-halteres.png",
        description: "Segure os halteres ao lado do corpo e execute o agachamento.",
        muscleGroup: "legs"
    },
    {
        name: "Avanço com Halteres",
        sets: 3,
        reps: "12-15 por perna",
        weight: "8kg",
        imageUrl: "~/assets/images/exercises/legs/avanco-halteres.png",
        description: "Dê um passo à frente com um halter em cada mão, mantendo o tronco ereto e abaixando o joelho de trás.",
        muscleGroup: "legs"
    },
    {
        name: "Elevação de Panturrilha em Pé com Halteres",
        sets: 3,
        reps: "15-20",
        weight: "8kg",
        imageUrl: "~/assets/images/exercises/legs/elevacao-panturrilha.png",
        description: "Segure os halteres ao lado do corpo e eleve os calcanhares o máximo possível.",
        muscleGroup: "legs"
    }
];