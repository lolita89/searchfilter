import React from 'react';

const people = [
    {
        id: 1,
        first: "Cika",
        last: "Lolita",
        age: 22,
        Photo: ''
    },
    {
        id: 2,
        first: "Luitzen",
        last: "Boot",
        age: 29,
        Photo: ''  
    },
    {
        id: 3,
        first: "Al Kautsar",
        last: "Sugiharto",
        age: 26,
        Photo: ''  
    },
    {
        id: 4,
        first: "Fariani",
        last: "Sugiharto",
        age: 55,
        Photo: ''  
    },
]

function searchingFor(term) {
    return function(x){
        return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: people,
            term: ''
        };

        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event){
        this.setState({
            term: event.target.value

        })

    }

    render() {
        return (
            <div>
                <form>
                    <center> 
                    <input type="text" onChange={this.searchHandler}/>  
                    </center>  
                </form>
            {
                this.state.people.filter(searchingFor(this.state.term)).map( person =>
                <div key={person.id}>
                    <center>
                    <h1>{person.first}</h1>
                    <h1>{person.last}</h1>
                    <h3>{person.age}</h3>
                    </center>
                </div>
                )    
            }
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
