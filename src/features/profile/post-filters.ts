export const status_to_score = new Map<string, number>([
    ['All', 0],
    ['Debunked', 1],
    ['Dubious', 2],
    ['Questionable', 3],
    ['Consensus', 4],
]);
export const status_list = [...status_to_score.keys()];
export const topics = ['Mental health', 'Nutrition', 'Neuroscience',
    'Public health', 'Prevention', 'Medicine', 'All'];