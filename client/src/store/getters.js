export default {
    user: state => state.user,
    categories: state => state.categories,
    todos: state => state.todos,
    notes: state => state.notes,
    loading: state => state.loading,
    error: state => state.error,
    authError: state => state.authError,
    message: state => state.message
};