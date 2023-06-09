const { Book, User } = require('../models');

const resolvers = {
    Query: {
        me: async () => {
            return User.find({});
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            console.log(args);
            const user = await User.create(args);
            return user;
        },
        saveBook: async (parent, { user, bookData }) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedBooks: bookData } },
                { new: true, runValidators: true }
              );
              return updatedUser;
        },
        login: async (parent, { username, email }) => {
            const user = await User.findOne({ $or: [{ username: username }, { email: email }] });
            return user;
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