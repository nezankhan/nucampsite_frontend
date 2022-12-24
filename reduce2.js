const users = [
    {
        username: 'edie',
        location: 'seattle'
    },
    {
        username: 'tomah',
        location: 'portland'
    },
    {
        username: 'jerome',
        location: 'oakland'
    },
    {
        username: 'solace',
        location: 'oakland'
    }
];

const usersByCity = users.reduce(
    (acc, user) => ({
        ...acc,
        [user.location]: (acc[user.location] || 0) + 1
    }),
    { oakland: 100, byzantium: 1000 }
);

console.log(usersByCity);