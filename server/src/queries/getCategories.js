module.exports = async (_, args, { Category }) => (await Category.find());