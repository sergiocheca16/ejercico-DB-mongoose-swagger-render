module.exports = {
    components:{
        schemas:{
            User:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"user identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"title task",
                        example:"John"
                    },
                    completed:{
                        type:'boolean',
                        description:"task completed or not",
                        example:"false"
                    },
                }
            }
        }
    }
}
