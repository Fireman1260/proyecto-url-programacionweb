import React, {Component} from 'react'
import { Button,
        Form,
        FormGroup,
        Label,
        Input,
        Container } from 'reactstrap';

import './index.css'


class Create extends Component{
    constructor(props){
        super(props);
        this.state = {id: 0};
    }

    componentDidMount(){
        var HeroList = JSON.parse(localStorage.getItem('Heroes'))
        var heroID = this.obtainHero(HeroList);
        console.log(heroID)
        this.setState({id: heroID })
    }

    obtainHero(HeroList){
        var newId = 0
        for(var i=0; i < HeroList.length; i++){
            if(HeroList[i]['id'] > newId){
                newId = HeroList[i]['id']
            }
        }
        newId += 1
        return newId
    }

    saveHero(){
        var id = this.state['id']
        var name =  document.getElementById('Name').value;
        var hero_type = document.getElementById('Type').value;
        var alter_ego =  document.getElementById('Alter_Ego').value;
        var species = document.getElementById('Species').value;
        var src = document.getElementById('Imagen').value;
        var HeroList = JSON.parse(localStorage.getItem('Heroes'))

        var newHero = {id: id,
                        name: name,
                        hero_type: hero_type,
                        alter_ego: alter_ego,
                        species: species,
                        src: src
                        }

        HeroList.push(newHero)

        console.log(HeroList)

        localStorage.setItem('Heroes', JSON.stringify(HeroList))
        window.location.href = "/"
    }


    render(){

        return(
            <div className="Edit">
                <h1>Create new hero</h1>
                <Container>
                    <Form>
                        <FormGroup>
                            <Label  for="Nombre de Heroe" className="labelName">Name</Label>
                            <Input className="InputText" type="text"   name="Name" id="Name" placeholder="Nombre del Heroe" />
                        </FormGroup>
                        <FormGroup>
                            <Label  for="Tipo de Heroe" className="labelName">Type</Label>
                            <Input className="InputText" type="text" name="Type" id="Type" placeholder="Tipo de Heroe" />
                        </FormGroup>
                        <FormGroup>
                            <Label  for="Nombre Real del Heroe" className="labelName">Alter Ego</Label>
                            <Input className="InputText"  type="text" name="Alter_Ego" id="Alter_Ego" placeholder="Nombre Real del Heroe" />
                        </FormGroup>
                        <FormGroup>
                            <Label  for="Especie" className="labelName">Species</Label>
                            <Input className="InputText" type="text" name="Species" id="Species" placeholder="Especie del Heroe" />
                        </FormGroup>
                        <FormGroup>
                            <Label  for="Imagen" className="labelName">Imagen</Label>
                            <Input className="InputText" type="text" name="Imagen" id="Imagen" placeholder="Imagen del Heroe" />
                        </FormGroup>
                    </Form>

                    <br>
                </br>
                <Button color="success"  onClick={() => this.saveHero()}> Guardar</Button>
                <Button color="danger" href="/"> Cancelar</Button>
                </Container>

            </div>
        );
    }
};

export default Create;
