import { slug } from '../lib/regex';

export const getCategories = async (_, args, { Category }) => (await Category.find());

export const addCategory = async (_, { title, url }, { Category }) => {
    // set url
    url = url.replace(slug, '-');
    
    // checked title exists
    const titleExists = await Category.findOne({ title });
    if(titleExists) throw new Error('Title is already taken');

    // checked url exists
    const urlExists = await Category.findOne({ url });
    if(urlExists) throw new Error('Url is already taken');

    // create category
    let newCategory = await Category({
        title,
        url
    }).save();

    // return it
    return newCategory;
};