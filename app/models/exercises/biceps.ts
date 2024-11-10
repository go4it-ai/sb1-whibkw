import { Exercise } from '../types';

export const bicepsExercises: Exercise[] = [
    {
        name: "Rosca Concentrada",
        sets: 3,
        reps: "12-15",
        weight: "8kg",
        imageUrl: "~/assets/images/exercises/biceps/rosca-concentrada.png",
        animatedImageUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif",
        description: "Sente-se, apoie o cotovelo na parte interna da coxa e concentre o movimento no bíceps.",
        muscleGroup: "biceps"
    },
    {
        name: "Rosca Martelo com Halteres",
        sets: 3,
        reps: "12-15",
        weight: "8kg",
        imageUrl: "~/assets/images/exercises/biceps/rosca-martelo.png",
        animatedImageUrl: "~/assets/images/exercises/biceps/rosca-martelo.gif",
        description: "Segure os halteres com as palmas viradas uma para a outra e mantenha os cotovelos estáveis.",
        muscleGroup: "biceps"
    }
];