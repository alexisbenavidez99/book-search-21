const { Book, User } = require('../models');

const resolvers = {
    Query: {
        me: async () => {
            return User.find({});
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        saveBook: async (parent, { user, body }) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedBooks: body } },
                { new: true, runValidators: true }
              );
              return updatedUser;
        },
        login: async (parent, args, { body }) => {
            const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        },
        removeBook: async (parent, { user, params }) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookId: params.bookId } } },
                { new: true }
              );
              return updatedUser;
        },
    },
};

module.exports = resolvers;