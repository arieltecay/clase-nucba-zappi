export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const selectedCategory = category => ({
    type: SELECT_CATEGORY,
    payload: category
});