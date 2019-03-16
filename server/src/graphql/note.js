export const getNotes = async (_, { userId }, { Note }) => {
    try {
        return await Note.find({ user: userId });
    } catch (err) {
        throw new Error(err);
    }
};

export const addNote = async (_, { title, content, userId }, { Note }) => {
    try {
        // create note
        let newNote = await Note({
            title,
            content,
            user: userId
        }).save();

        // return it
        return newNote;
    } catch (err) {
        throw new Error(err);
    }
};

export const updateNote = async (_, { noteId, userId, title, content }, { Note }) => {
    try {
        // find note and update it
        return await Note.findOneAndUpdate(
            { _id: noteId, user: userId },
            { title, content },
            { new: true }
        );
    } catch (err) {
        throw new Error(err);
    }
};