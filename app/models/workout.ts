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

export const bonusExercisePool: { [key: string]: Exercise[] } = {
  "biceps": [
        {
            name: "Rosca Concentrada",
            sets: 3,
            reps: "12-15",
            weight: "8kg",
            imageUrl: "~/assets/images/exercises/Concentration-Curl.png",
            animatedImageUrl: "~/assets/images/exercises/Concentration-Curl.gif",
            description: "Sente-se, apoie o cotovelo na parte interna da coxa e concentre o movimento no bíceps.",
            muscleGroup: "biceps"
        },
        {
            name: "Rosca Martelo com Halteres",
            sets: 3,
            reps: "12-15",
            weight: "8kg",
            imageUrl: "~/assets/images/exercises/Hammer-Curl.png",
            animatedImageUrl: "~/assets/images/exercises/Hammer-Curl.gif",
            description: "Segure os halteres com as palmas viradas uma para a outra e mantenha os cotovelos estáveis.",
            muscleGroup: "biceps"
        }
    ],
    "triceps": [
        {
            name: "Tríceps Testa com Halteres",
            sets: 3,
            reps: "12-15",
            weight: "8kg",
            imageUrl: "~/assets/images/exercises/Dumbbell-Skull-Crusher.png",
            animatedImageUrl: "~/assets/images/exercises/Dumbbell-Skull-Crusher.gif",
            description: "Deite-se no banco, segure os halteres acima da testa e flexione os cotovelos.",
            muscleGroup: "triceps"
        },
        {
            name: "Tríceps Mergulho em Banco",
            sets: 3,
            reps: "12-15",
            weight: "Peso Corporal",
            imageUrl: "~/assets/images/exercises/Triceps-Dips-on-Floor.png",
            animatedImageUrl: "~/assets/images/exercises/Triceps-Dips-on-Floor.gif",
            description: "Apoie as mãos em um banco e desça controladamente, mantendo os cotovelos para trás.",
            muscleGroup: "triceps"
        }
    ],
    "shoulders": [
        {
            name: "Elevação Frontal com Halteres",
            sets: 3,
            reps: "12-15",
            weight: "4-6kg",
            imageUrl: "~/assets/images/exercises/Alternating-Dumbbell-Front-Raise.png",
            animatedImageUrl: "~/assets/images/exercises/Alternating-Dumbbell-Front-Raise.gif",
            description: "Levante os halteres até a altura dos ombros, mantendo um leve arco nos cotovelos.",
            muscleGroup: "shoulders"
        },
        {
            name: "Elevação Posterior com Halteres",
            sets: 3,
            reps: "12-15",
            weight: "4-6kg",
            imageUrl: "~/assets/images/exercises/Bent-Over-Lateral-Raise.png",
            animatedImageUrl: "~/assets/images/exercises/Bent-Over-Lateral-Raise.gif",
            description: "Curvado à frente, levante os halteres lateralmente focando a parte posterior dos ombros.",
            muscleGroup: "shoulders"
        }
    ],
    "chest": [
        {
            name: "Crucifixo no Banco com Halteres",
            sets: 3,
            reps: "12-15",
            weight: "8kg",
            imageUrl: "~/assets/images/exercises/Dumbbell-Fly.png",
            description: "Abra os braços em forma de arco e mantenha um leve ângulo nos cotovelos.",
            muscleGroup: "chest"
        },
        {
            name: "Flexões Diamante",
            sets: 3,
            reps: "10-15",
            weight: "Peso Corporal",
            imageUrl: "~/assets/images/exercises/Diamond-Push-up.png",
            description: "Posicione as mãos em formato de diamante para maior ênfase nos tríceps e peito.",
            muscleGroup: "chest"
        }
    ],
    "back": [
        {
            name: "Remada Unilateral com Halteres",
            sets: 3,
            reps: "12-15",
            weight: "8kg",
            imageUrl: "~/assets/images/exercises/Dumbbell-Row.png",
            description: "Use um banco de apoio, puxe o halter em direção ao quadril com controle.",
            muscleGroup: "back"
        },
        {
            name: "Superman",
            sets: 3,
            reps: "12-15",
            weight: "Peso Corporal",
            imageUrl: "~/assets/images/exercises/Swimming.png",
            description: "Deite-se de bruços e levante braços e pernas simultaneamente, contraindo as costas.",
            muscleGroup: "back"
        }
    ],
    "legs": [
        {
            name: "Agachamento com Halteres",
            sets: 3,
            reps: "15-20",
            weight: "8kg",
            imageUrl: "~/assets/images/exercises/Dumbbell-Squat.png",
            description: "Segure os halteres ao lado do corpo e execute o agachamento.",
            muscleGroup: "legs"
        },
        {
            name: "Avanço com Halteres",
            sets: 3,
            reps: "12-15 por perna",
            weight: "8kg",
            imageUrl: "~/assets/images/exercises/power-lunge.png",
            description: "Dê um passo à frente com um halter em cada mão, mantendo o tronco ereto e abaixando o joelho de trás.",
            muscleGroup: "legs"
        },
        {
            name: "Elevação de Panturrilha em Pé com Halteres",
            sets: 3,
            reps: "15-20",
            weight: "8kg",
            imageUrl: "~/assets/images/exercises/Dumbbell-Calf-Raise.png",
            description: "Segure os halteres ao lado do corpo e eleve os calcanhares o máximo possível.",
            muscleGroup: "legs"
        }
    ]
};

export const workoutPlan: WorkoutDay[] = [
   {
        id: "day1",
        name: "Dia 1: Braços e Ombros",
        exercises: [
            {
                name: "Rosca Bíceps com Halteres",
                sets: 4,
                reps: "10-12",
                weight: "8kg",
                imageUrl: "~/assets/images/exercises/biceps/rosca-biceps.png",
                description: "Mantenha os cotovelos próximos ao corpo e controle o movimento.",
                muscleGroup: "biceps"
            },
            {
                name: "Tríceps Francês (com um halter)",
                sets: 4,
                reps: "12-15",
                weight: "8kg",
                imageUrl: "~/assets/images/exercises/triceps/triceps-frances.png",
                description: "Evite movimentos bruscos, controle a descida.",
                muscleGroup: "triceps"
            },
            {
                name: "Elevação Lateral com Halteres",
                sets: 3,
                reps: "12-15",
                weight: "6kg",
                imageUrl: "~/assets/images/exercises/shoulders/elevacao-lateral.png",
                description: "Mantenha os cotovelos levemente flexionados e controle o movimento.",
                muscleGroup: "shoulders"
            },
            {
                name: "Rosca Martelo Alternada",
                sets: 3,
                reps: "10-12",
                weight: "8kg",
                imageUrl: "~/assets/images/exercises/biceps/rosca-martelo.png",
                description: "Alterne os braços, mantendo o punho neutro.",
                muscleGroup: "biceps"
            },
            {
                name: "Shoulder Press com Halteres",
                sets: 4,
                reps: "10-12",
                weight: "8kg",
                imageUrl: "~/assets/images/exercises/shoulders/shoulder-press.png",
                description: "Empurre os halteres para cima de forma controlada.",
                muscleGroup: "shoulders"
            }
        ],
        muscleGroups: ["biceps", "triceps", "shoulders"]
    },
    {
        id: "day2",
        name: "Dia 2: Peito e Costas",
        exercises: [
            {
                name: "Flexões",
                sets: 4,
                reps: "10-15",
                weight: "Peso Corporal",
                imageUrl: "~/assets/images/exercises/chest/flexoes.png",
                description: "Mantenha o corpo alinhado, desça até formar um ângulo de 90 graus nos cotovelos.",
                muscleGroup: "chest"
            },
            {
                name: "Aberturas com Halteres (Dumbbell Flys)",
                sets: 3,
                reps: "12-15",
                weight: "6kg",
                imageUrl: "~/assets/images/exercises/chest/dumbbell-flys.png",
                description: "Controle o movimento na descida para máxima ativação do peitoral.",
                muscleGroup: "chest"
            },
            {
                name: "Remada Unilateral com Halteres",
                sets: 4,
                reps: "10-12",
                weight: "8kg",
                imageUrl: "~/assets/images/exercises/back/remada-unilateral.png",
                description: "Mantenha as costas retas e controle o movimento.",
                muscleGroup: "back"
            },
            {
                name: "Pull-Over com Halter",
                sets: 3,
                reps: "12-15",
                weight: "8kg",
                imageUrl: "~/assets/images/exercises/back/pull-over.png",
                description: "Mantenha o core contraído para suporte durante o movimento.",
                muscleGroup: "chest"
            }
        ],
        muscleGroups: ["chest", "back"]
    },
    {
        id: "day3",
        name: "Dia 3: Core com Elementos de Pernas",
        exercises: [
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
                name: "Agachamento Livre",
                sets: 3,
                reps: "15",
                weight: "Peso Corporal ou leve",
                imageUrl: "~/assets/images/exercises/legs/agachamento-livre.png",
                description: "Mantenha a postura correta, descendo de forma controlada.",
                muscleGroup: "legs"
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
        ],
        muscleGroups: ["core", "legs"]
    },
    {
        id: "day4",
        name: "Dia 4: Braços e Ombros",
        exercises: [
            {
                name: "Rosca Bíceps com Halteres",
                sets: 4,
                reps: "10-12",
                weight: "8kg",
                imageUrl: "~/assets/images/exercises/biceps/rosca-biceps.png",
                description: "Mantenha os cotovelos próximos ao corpo e controle o movimento.",
                muscleGroup: "biceps"
            },
            {
                name: "Tríceps Francês (com um halter)",
                sets: 4,
                reps: "12-15",
                weight: "8kg",
                imageUrl: "~/assets/images/exercises/triceps/triceps-frances.png",
                description: "Evite movimentos bruscos, controle a descida.",
                muscleGroup: "triceps"
            },
            {
                name: "Elevação Lateral com Halteres",
                sets: 3,
                reps: "12-15",
                weight: "6kg",
                imageUrl: "~/assets/images/exercises/shoulders/elevacao-lateral.png",
                description: "Mantenha os cotovelos levemente flexionados e controle o movimento.",
                muscleGroup: "shoulders"
            },
            {
                name: "Rosca Martelo Alternada",
                sets: 3,
                reps: "10-12",
                weight: "8kg",
                imageUrl: "~/assets/images/exercises/biceps/rosca-martelo.png",
                description: "Alterne os braços, mantendo o punho neutro.",
                muscleGroup: "biceps"
            },
            {
                name: "Shoulder Press com Halteres",
                sets: 4,
                reps: "10-12",
                weight: "8kg",
                imageUrl: "~/assets/images/exercises/shoulders/shoulder-press.png",
                description: "Empurre os halteres para cima de forma controlada.",
                muscleGroup: "shoulders"
            }
        ],
        muscleGroups: ["biceps", "triceps", "shoulders"]
    },
    {
        id: "day5",
        name: "Dia 5: Peito e Costas",
        exercises: [
            {
                name: "Flexões",
                sets: 4,
                reps: "10-15",
                weight: "Peso Corporal",
                imageUrl: "~/assets/images/exercises/chest/flexoes.png",
                description: "Mantenha o corpo alinhado, desça até formar um ângulo de 90 graus nos cotovelos.",
                muscleGroup: "chest"
            },
            {
                name: "Aberturas com Halteres (Dumbbell Flys)",
                sets: 3,
                reps: "12-15",
                weight: "6kg",
                imageUrl: "~/assets/images/exercises/chest/dumbbell-flys.png",
                description: "Controle o movimento na descida para máxima ativação do peitoral.",
                muscleGroup: "chest"
            },
            {
                name: "Remada Unilateral com Halteres",
                sets: 4,
                reps: "10-12",
                weight: "8kg",
                imageUrl: "~/assets/images/exercises/back/remada-unilateral.png",
                description: "Mantenha as costas retas e controle o movimento.",
                muscleGroup: "back"
            },
            {
                name: "Pull-Over com Halter",
                sets: 3,
                reps: "12-15",
                weight: "8kg",
                imageUrl: "~/assets/images/exercises/back/pull-over.png",
                description: "Mantenha o core contraído para suporte durante o movimento.",
                muscleGroup: "chest"
            }
        ],
        muscleGroups: ["chest", "back"]
    },
    {
        id: "day6",
        name: "Dia 6: Pernas com Elementos de Core",
        exercises: [
            {
                name: "Agachamento Livre",
                sets: 4,
                reps: "15-20",
                weight: "Peso Corporal ou com halteres leves",
                imageUrl: "~/assets/images/exercises/legs/agachamento-livre.png",
                description: "Desça de forma controlada, mantendo a coluna ereta.",
                muscleGroup: "legs"
            },
            {
                name: "Elevação de Panturrilha",
                sets: 4,
                reps: "15-20",
                weight: "Peso Corporal",
                imageUrl: "~/assets/images/exercises/legs/elevacao-panturrilha.png",
                description: "Pausa no topo para maior contração.",
                muscleGroup: "legs"
            },
            {
                name: "Abdominal Bicicleta",
                sets: 3,
                reps: "20 (10 para cada lado)",
                weight: "Peso Corporal",
                imageUrl: "~/assets/images/exercises/core/abdominal-bicicleta.png",
                description: "Controle a rotação do tronco.",
                muscleGroup: "core"
            },
            {
                name: "Ponte de Glúteo (Elevação Pélvica)",
                sets: 4,
                reps: "15",
                weight: "Peso Corporal",
                imageUrl: "~/assets/images/exercises/legs/ponte-gluteo.png",
                description: "Contraia os glúteos no topo do movimento.",
                muscleGroup: "legs"
            },
            {
                name: "Prancha Lateral",
                sets: 3,
                reps: "30-45 segundos por lado",
                weight: "Peso Corporal",
                imageUrl: "~/assets/images/exercises/core/prancha-lateral.png",
                description: "Mantenha o corpo alinhado durante toda a execução.",
                muscleGroup: "core"
            }
        ],
        muscleGroups: ["legs", "core"]
    }
];