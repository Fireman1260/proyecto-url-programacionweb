import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button, Table, ListGroup, ListGroupItem} from 'reactstrap';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//Crear Listado principal de heroes
class Heroes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heroList: []
        };
    }

    componentDidMount() {//load the local storage data after the component renders
        var heroes = (typeof localStorage["Heroes"] !== "undefined") ? 
                JSON.parse(localStorage.getItem("Heroes")) : localStorage.setItem("Heroes",JSON.stringify([
            {name: "Spiderman", hero_type: "heroe", alter_ego: "Peter Parker", species:"Human Mutate", abilities: ["Genius", "Superhuman strength", "Speed", "Durability", "Agility"], first_appearance:"Amazing Fantasy #15"},
            {name: "Deadpool", hero_type: "anti-heroe", alter_ego: "Wade Wilson", species:"Human Mutate", abilities: ["Healing Factor", "Marksman", "Swordsman", "Hand-to-hand Combat", "Teleportation"], first_appearance:"New Mutants #98"},
            {name: "Red Hood", hero_type: "anti-heroe", alter_ego: "Jason Todd", species:"Human", abilities: ["Marksman", "Martial Artist", "Hand-to-hand Combat", "High-tech equipment", "Enhanced strength"], first_appearance:"Batman #635"},
            {name: "Batman", hero_type: "heroe", alter_ego: "Bruce Wayne", species:"Human", abilities: ["Genius", "Superhuman strength", "Martial Artist", "Hand-to-hand Combat", "Expert detective"], first_appearance:"Detective Comics #27"},
            {name: "Flash", hero_type: "heroe", alter_ego: "Barry Allen", species:"Metahuman", abilities: ["Immense superhuman speed", "Agility", "Stamina", "Electrokinesis", "Body vibration"], first_appearance:"Showcase #4"},
            {name: "Superman", hero_type: "heroe", alter_ego: "Clark Kent", species:"Kryptonian", abilities: ["Superhuman strength", "Superhuman speed", "Superhuman vision", "Superhuman breath ", "Invulnerability", "Flight"], first_appearance:"Action Comics #1"},
            {name: "Iron Man", hero_type: "heroe", alter_ego: "Tony Stark", species:"Human", abilities: ["Genius", "Agility", "Powered armor suit", "Proficient scientist", "Engineer"], first_appearance:"Tales of Suspense #39"},
            {name: "Captain America", hero_type: "heroe", alter_ego: "Steve Rogers", species:"Human Mutate", abilities: ["Peak human strength", "Speed", "Master martial artist", "Hand-to-hand Combat", "Accelerated healing factor"], first_appearance:"	Captain America Comics #1"}
        ]));
        this.setState({heroList: heroes});
      }

    render() {
        const Heroes = this.state.heroList;
        return(
          <div className="jumbotron">
            <h1>Heroes</h1>

            <Button color="success">Add new Heroe</Button>
            <hr></hr>
            <Table dark hover bordered>
                <tr>
                    <th>
                        Super Heroe Name
                    </th>
                    <th>
                        Alter Ego
                    </th>
                    <th>
                        Type of Heroe
                    </th>
                    <th>
                        Species
                    </th>
                    <th>
                        Abilities
                    </th>
                    <th>
                        First Appearance
                    </th>
                </tr>
                {Heroes.map((Heroes, index) => (
                    <tr>
                        <td>
                            {Heroes.name}
                        </td>
                        <td>
                            {Heroes.alter_ego}
                        </td>
                        <td>
                            {Heroes.hero_type}
                        </td>
                        <td>
                            {Heroes.species}
                        </td>
                        <td>
                            <ListGroup toggle>
                                {Heroes.abilities.map((ability, index) => (
                                    <ListGroupItem color="dark" key={index}>{ability}</ListGroupItem>
                                ))}
                            </ListGroup>
                        </td>
                        <td>
                            {Heroes.first_appearance}
                        </td>
                    </tr>
                    
                ))}
            </Table>
            {/* <PanelGroup accordion id="recipes">
              {recipes.map((recipe, index) => (
                <Panel eventKey={index} key={index}>
                  <Panel.Heading>
                    <Panel.Title className="title" toggle>{recipe.name}</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                    <ListGroup>
                      {recipe.ingredients.map((ingredient, index) => (
                        <ListGroupItem key={index}>{ingredient}</ListGroupItem>
                      ))}
                    </ListGroup>
                    <ButtonToolbar>
                      <Button bsStyle="warning">Edit</Button>
                      <Button bsStyle="danger">Delete</Button>
                    </ButtonToolbar>
                  </Panel.Body>
                </Panel>
              ))}
            </PanelGroup> */}
            
          </div>
        );
      }
    
}

ReactDOM.render(<Heroes />, document.getElementById('app'));