import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import './App.css';
import RouteList from './RouteList';

// import whiskey from './path-to-whiskey-image.jpg';
// import duke from './path-to-duke-image.jpg';
// import perry from './path-to-perry-image.jpg';
// import tubby from './path-to-tubby-image.jpg';

// The *<App />* should render:
// - a *<Nav />* component with the dogs’ names passed as props
// - a *<Switch>* with your *<Route />* declarations

function App({ dogs }) {
    return (
        <BrowserRouter>
            <NavBar dogs={dogs} />
            <div className="container">
                <RouteList dogs={dogs} />
            </div>
        </BrowserRouter>
    );
}

App.defaultProps = {
    dogs: [
        {
            name: 'Whiskey',
            age: 5,
            src: 'whiskey',
            facts: [
                'Whiskey loves eating popcorn.',
                'Whiskey is a terrible guard dog.',
                'Whiskey wants to cuddle with you!',
            ],
        },
        {
            name: 'Duke',
            age: 3,
            src: 'duke',
            facts: [
                'Duke believes that ball is life.',
                'Duke likes snow.',
                'Duke enjoys pawing other dogs.',
            ],
        },
        {
            name: 'Perry',
            age: 4,
            src: 'perry',
            facts: [
                'Perry loves all humans.',
                'Perry demolishes all snacks.',
                'Perry hates the rain.',
            ],
        },
        {
            name: 'Tubby',
            age: 4,
            src: 'tubby',
            facts: [
                'Tubby is really stupid.',
                'Tubby does not like walks.',
                'Angelina used to hate Tubby, but claims not to anymore.',
            ],
        },
    ],
};

export default App;
