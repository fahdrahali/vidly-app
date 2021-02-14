const movies = [
    {
        id: 1,
        title: 'Terminator',
        genre: { _id: 1, name: 'Action'},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        liked: true
    },
    {
        id: 2,
        title: 'Die Hard',
        genre: { _id: 2, name: 'Adventure'},
        numberInStock: 4,
        dailyRentalRate: 2.5
    },
    {
        id: 3,
        title: 'The Vigil',
        genre: { _id: 3, name: 'Horror'},
        numberInStock: 9,
        dailyRentalRate: 2.5
    },
    {
        id: 4,
        title: 'Alone',
        genre: { _id: 4, name: 'Thriller'},
        numberInStock: 9,
        dailyRentalRate: 3.7,
        liked: true
    },
    {
        id: 5,
        title: 'Alone',
        genre: { _id: 4, name: 'Thriller'},
        numberInStock: 9,
        dailyRentalRate: 3.7,
        liked: true
    },
    {
        id: 6,
        title: 'Alone',
        genre: { _id: 4, name: 'Thriller'},
        numberInStock: 9,
        dailyRentalRate: 3.7,
        liked: true
    },{
        id: 7,
        title: 'Alone',
        genre: { _id: 4, name: 'Thriller'},
        numberInStock: 9,
        dailyRentalRate: 3.7,
        liked: true
    },{
        id: 8,
        title: 'Alone',
        genre: { _id: 4, name: 'Thriller'},
        numberInStock: 9,
        dailyRentalRate: 3.7,
        liked: true
    }

];


export function getMovies(){
    return movies;
}