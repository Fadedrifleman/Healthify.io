const User = {
    createdAt: Date(),
    bio: String,
    basicInfo: {
        name: String,
        gender: String,
        phoneNumber: String,
        email: String,
        age: Number,
        dailyActivity: String, //fitness Status
        height: { 
            feet: Number,
            inch: Number,
        },
        weight: Number,
        goalPace: {
            type: Number,
            default: 0.5,
        },
        medicalConditon: [String],
        emotionalHealth: [String],
        location: String,
    },
    primaryGoal: {
        weightGoal: {
            target: Number,
            pace: Number,
        },
        nutritionGoal: {
            daliyCalories: Number,
            dailyNutrients: {
                protien: Number,
                carb: Number,
                fat: Number,
                fiber: Number,
            },
        },
        waterGoal: {
            glassPerDay: Number,
        },
        stepsGoal:{
            dailySteps: Number,
        },
    },
    foodPreference: {
        dietType: String,
        allergies: [String],
    },
    counter: {
        calories: Number,
        water: Number,
        steps: Number,
    },
    trackers: {
        fitbit: Boolean,
    },
    plan: {
        active: Boolean,
        planType: String,
        coachAssigned: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'coach'
            }],
    },
    formula: String,
    healthLog: String,
    bodyMeasurement: String,
    leaderboard: {
        score: Number,
        rank: Number,
    }    
}