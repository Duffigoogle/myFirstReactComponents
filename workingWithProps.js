// Props is short for properties and they are used to pass data between React components.
// React's data flow between components is uni-directional (from parent to child only).

const { Component } = require("react");

//How do you pass with props?

// Practice 1

class ParentComponent extends Component {
    render() {
        return (
            <childComponent name='First Child' />
        );
    }
}

const ChildComponent = (props) => { 
    return <p>{props.name}</p>;
};

// Setting up variables

const author = 'Caleb Duff';
const title = 'The Drums of the Wee Hours';
const img = "";

function BookList() {
    return (
        <div className='list'>
            <Book />
            <Book />
        </div>
    );
}

const Book = (props) => {
    return (
        <React.Fragment>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </React.Fragment>
    );
}

ReactDOM.render(<BookList />, document.getElementById('root'));



//Practice 2 - Applying another concept of using props

// Setting up objects
const firstBook = {
    img: "",
    title: 'I Love Coding',
    author: "Kendrick Abang"
}

const secondBook = {
    img: "",
    title: 'Live, Love, Code and Travel',
    author: "Caleb Duff"
}


function BookList() {
    return (
        <div className='list'>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
        </div>
    );
}

const Book = (props) => {
    return (
        <React.Fragment>
            <img src={props.img} alt="" />
            <h1>{props.title}</h1>
            <h4>{props.author}</h4>
        </React.Fragment>
    );
}

// We could as well rewrite the above Book component as below and it works smoothly
//Destructuring the props

const Book = (props) => {
    const { img, title, author } = props;
    return (
        <React.Fragment>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </React.Fragment>
    );
}

// We could as well rewrite the above as below and result will be the same.

const Book = ({ img, title, author }) => {
    // const { img, title, author } = props;
    return (
        <React.Fragment>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </React.Fragment>
    );
}

ReactDOM.render(<BookList />, document.getElementById('root'));


// SPECIAL PROP CALLED 'children'
//The children prop is everything that we render in between the opening and closing tag of the component
// i.e <Book> </Book> In this case we don't self-close the component tags.

function BookList() {
    return (
        <div className='list'>
            <Book 
                img={firstBook.img} 
                title={firstBook.title} 
                author={firstBook.author} 
                >
                    <p>
                        Lorem ipsum dolor sit amete consecdr magnum islo contour volumtrous libero ducimus.
                    </p>
            </Book>
            <Book 
                img={secondBook.img} 
                title={secondBook.title} 
                author={secondBook.author} />
        </div>
    );
}

const Book = ({ img, title, author, children }) => {
    // const { img, title, author } = props;
    return (
        <React.Fragment>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
            {children}  
        </React.Fragment>
    );
}

ReactDOM.render(<BookList />, document.getElementById('root'));


//Practice 2 - Applying another concept of using props

// Setting up an array filled with strings
const books = ['Debby', 'Douglas', 'Funke', 'Scarlet', 'Natachi'];
const newNames = names.map((name) => {
    return <h1>{name}</h1>;
});

function BookList() {
    return (
        <div className='list'>
            {newNames}
        </div>
    );
}

ReactDOM.render(<BookList />, document.getElementById('root'));



// Setting up an array filled with objects
const books = [ 
    {
    img: "",
    title: 'I Love Coding',
    author: "Kendrick Abang"
    },

    {
    img: "",
    title: 'Live, Love, Code and Travel',
    author: "Caleb Duff"
    },
];


function BookList() {
    return (
        <div className='booklist'>
            {books.map((book) => {
                const { img, title, author } = book;
                return (
                    <div>
                        <h3>{title}</h3>
                        <h6>{author}</h6>
                    </div>
                );
            })}
        </div>
    );
}

ReactDOM.render(<BookList />, document.getElementById('root'));



// Setting up an array filled with objects
const books = [ 
    {
    img: "",
    title: 'I Love Coding',
    author: "Kendrick Abang"
    },

    {
    img: "",
    title: 'Live, Love, Code and Travel',
    author: "Caleb Duff"
    },
];


function BookList() {
    return (
        <div className='booklist'>
            {books.map((book) => {
                const { img, title, author } = book;
                return <Book book={book}></Book>;
            })}
        </div>
    );
}

const Book = (props) => {
    const { img, title, author } = props.book;
    return (
        <article className='book'>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    );
}

ReactDOM.render(<BookList />, document.getElementById('root'));


// Setting up an array filled with objects
const books = [ 
    { id: 1,
    img: "",
    title: 'I Love Coding',
    author: "Kendrick Abang"
    },

    { id: 2,
    img: "",
    title: 'Live, Love, Code and Travel',
    author: "Caleb Duff"
    },

    { id: 3,
    img: "",
    title: 'DevCode Programming',
    author: "TheLastGoodMan"
    },
];


function BookList() {
    return (
        <div className='booklist'>
            {books.map((book, index) => {
                return <Book key={book.id} book={...book}></Book>;
            })}
        </div>
    );
}

const Book = ({img, title, author}) => {
    // const { img, title, author } = props;
    return (
        <article className='book'>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    );
}

ReactDOM.render(<BookList />, document.getElementById('root'));

