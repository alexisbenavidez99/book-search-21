const { Book, User } = require('../models');

const resolvers = {
    Query: {
        me: async () => {
            return User.find({});
        }
    },
    Mutation: {
        
    }
}