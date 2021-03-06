var mongoose=require('mongoose');

var StorySchema = new mongoose.Schema({
    title:{
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
        type:[String]
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