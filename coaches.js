const coach = {
    name: String,
    rating: Number,
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
}