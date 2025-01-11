export const claimStatus = new Map<number, string>([
    [4, 'Consensus'],
    [3, 'Questionable'],
    [2, 'Dubious'],
    [1, 'Debunked'],
    [0, '']
]);
export enum topic {
    mental_health = 'Mental health',
    nutrition = 'Nutrition',
    neuroscience = 'Neuroscience',
    public_health = 'Public health',
    preventive = 'Prevention',
    medicine = 'Medicine'
}
