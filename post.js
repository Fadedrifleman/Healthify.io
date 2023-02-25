const Post = {
    tag: String,
    content: String,
    image: String,
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    likes: Number,
}

const Comment = {
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    content: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
}