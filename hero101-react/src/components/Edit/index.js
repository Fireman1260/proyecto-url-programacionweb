import React, {Component} from 'react'
import { Button, 
        Form,
        FormGroup, 
        Label, 
        Input, 
        Container } from 'reactstrap';
import queryString from 'query-string'

import './index.css'


class Edit  extends Component{
    constructor(props){
        super(props);
        this.state = {id: 0,
                      name: "",
                      hero_type: "",
                      alter_ego: "",
                      species: "",
                      abilities: []};
        
        
    }

    componentDidMount(){
        const values = queryString.parse(this.props.location.search)
        var HeroList = JSON.parse(localStorage.getItem('Heroes'))
        var editHero = this.obtainHero(values.id, HeroList);
        if (editHero === undefined){
            window.location.href = "/404-Page";
        }

        this.setState({id: editHero['id'],
                       name: editHero['name'], 
                        hero_type: editHero['hero_type'],
                       alter_ego: editHero['alter_ego'],
                       species: editHero['species'],
                       abilities: editHero['abilities']
                    })
    }

    obtainHero(id, HeroList){
        id = parseInt(id, 10)
        for(var i=0; i < HeroList.length; i++){
            if(HeroList[i]['id'] === id){
                return HeroList[i];
            }
        }
        return undefined;
    }

    saveHero(id){
        id = parseInt(id, 10)
        var name =  document.getElementById('Name').value;
        var hero_type = document.getElementById('Type').value;
        var alter_ego =  document.getElementById('Alter_Ego').value;
        var species = document.getElementById('Species').value;

        var HeroList = JSON.parse(localStorage.getItem('Heroes'))
        for(var i=0; i < HeroList.length; i++){
            if(HeroList[i]['id'] === id){
                HeroList[i]['name'] = name
                HeroList[i]['hero_type'] = hero_type
                HeroList[i]['alter_ego'] = alter_ego
                HeroList[i]['species'] = species
                break;
            }
        }
        localStorage.setItem('Heroes', JSON.stringify(HeroList))
        window.location.href = "/"
    }


    render(){
        const id = this.state.id

        return(
            <div className="Edit">
                <h1>Edit {this.state.name}</h1>
                <Container>
                    <Form>
                        <FormGroup>
                            <Label  for="Nombre de Heroe" className="labelName">Name</Label>
                            <Input className="InputText" defaultValue={this.state.name} type="text"   name="Name" id="Name" placeholder="Nombre del Heroe" />
                        </FormGroup>
                        <FormGroup>
                            <Label  for="Tipo de Heroe" className="labelName">Type</Label>
                            <Input className="InputText" defaultValue={this.state.hero_type} type="text" name="Type" id="Type" placeholder="Tipo de Heroe" />
                        </FormGroup>
                        <FormGroup>
                            <Label  for="Nombre Real del Heroe" className="labelName">Alter Ego</Label>
                            <Input className="InputText" defaultValue={this.state.alter_ego} type="text" name="Alter_Ego" id="Alter_Ego" placeholder="Nombre Real del Heroe" />
                        </FormGroup>
                        <FormGroup>
                            <Label  for="Especie" className="labelName">Species</Label>
                            <Input className="InputText" defaultValue={this.state.species} type="text" name="Species" id="Species" placeholder="Especie del Heroe" />
                        </FormGroup>

                    </Form>

                    <br>
                </br>
                <Button color="success" defaultValue={id} onClick={() => this.saveHero(id)}> Guardar</Button>
                <Button color="danger" href="/"> Cancelar</Button>
                </Container>
                
            </div>
        );
    }
};

export default Edit;
