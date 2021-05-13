// Objects...
const person = {
    name: 'Serhan',
    age: 27,
    professor: true,
    address: {
        street: '1200 Victory Blvd',
        city: 'Staten Island',
    },
    classes: [
        'csc225',
        'csc226',
    ],
    setName: function(name){
        this.name = name;
    }
};

// console.log(person.name);
person.setName('Rob');
// console.log(person.name);
person.name = 'vandalized';
// console.log(person.name);

const { name, age, address } = person;
// console.log(name, age, address);

const books = [
    {
        title: 'Tale of Two Cities',
        year: 1859,
        author: 'Charles Dickens',
        isbn: 1234561,
        mainCharacters: [
            'Charles Darnay',
            'Madame Defarge',
            'Sydney Carton',
        ]
    },
    {
        title: 'Things Fall Aparrt',
        year: 1958,
        // just to demonstrate order doesnt matter
        author: 'Chinua Achebe',
        isbn: 123456,
        mainCharacters: [
            'Okonkwo',
            'Nwoye',
            'Mr Brown',
        ]
        
    },
    {
        title: 'Brave New World',
        year: 1932,
        author: 'Aldous Huxley',
        mainCharacters: [
            'Lenina Crowe',
            'Bernard Marx',
            'John the Savage',
        ]
        
    },
    
];

// books.forEach(function(book) {
//     console.log(`The book ${book.title} was written in ${book.year}`);
// });

// const modernBooks = books.filter(function(book){
//     return book.year < 1900;
// }).forEach(function(book) {
//     console.log(`The book ${book.title} was written after 1900 (${book.year})`);
// });

books.filter(function(book){
    const { isbn, year } = book;
    console.log(year, isbn);
    // this above is a cleaner way to write:
    // const year = book.year;
    // const isbn = book.isbn;

    return (
        year > 1900 && 
        !!isbn
    )
}).forEach(function(book) {
    console.log(`The book ${book.title} was written after 1900 (${book.year})`);
});


const squares = [1,2,3,4,5].map(function(n){
    return n*n;
});

console.log(squares);