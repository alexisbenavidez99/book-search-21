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
        saveBook: async (parent, { user, book }) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedBooks: book } },
                { new: true, runValidators: true }
              );
              return updatedUser;
        },
        login: async (parent, { username, email }) => {
            const user = await User.findOne({ $or: [{ username: username }, { email: email }] });
        },
        removeBook: async (parent, { user, bookId }) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
              );
              return updatedUser;
        },
    },
};

module.exports = resolvers;