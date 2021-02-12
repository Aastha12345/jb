var mongoose=require('mongoose');

var StorySchema = new mongoose.Schema({
    title:{
        type:String
    },
    photo:{
        type:String
    },
    author:{
        username:{
            type:String
        },
        _id:{
            type:String
        }
    },
    description:{
        type:String
    },
    company:{
        type:String
    },
    category:{
        type:[String]
    },
    location:{
        type:String
    },
    payscale:{
        type:String
    },
    contact:{
        type:String
    },
    apply:{
        type:String
    },
    persons:{
        //stores the _id of persons who liked or disliked
        type:[String],
        default:"0"
    },
    comments:
    [{
        text:{
            type:String
            },
        username:{
            type:String
        },
        commenttime:{
            type:Date
        }
    }]
})

module.exports=mongoose.model('Story',StorySchema)