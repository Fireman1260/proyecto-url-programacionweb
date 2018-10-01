import React, {Component} from 'react';
import { Button, Container } from 'reactstrap';
import queryString from 'query-string'

class Delete  extends Component{

    constructor(props){
        super(props);
        this.state = {id: 0,
                      name: "",
                      hero_type: "",
                      alter_ego: "",
                      species: ""};
        
        
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

    killHero(id){
        var HeroList = JSON.parse(localStorage.getItem('Heroes'))
        var newHeroList = []
        for(var i=0; i < HeroList.length; i++){
            
            if(HeroList[i]['id'] !== id){
                newHeroList.push(HeroList[i])
            }
        }
        localStorage.setItem('Heroes', JSON.stringify(newHeroList))
        window.location.href = "/"
    }

    render(){
        const id = this.state.id

        return(
            <div className="Delete">
                <h1>Delete {this.state.name}</h1>
                <br></br>
                <br></br>
                <div className="offset-md-5">
                    <div className="col-md-4">
                        <dl>
                            <dt className="labelName">
                                <h2>Name</h2>
                            </dt>
                            <br></br>
                            <br></br>
                            <dd  className="labelName">
                                <h5>{this.state.name}</h5>
                            </dd>

                            <br></br>
                            <br></br>

                            <dt className="labelName">
                                <h2>Type</h2>
                            </dt>
                            <br></br>
                            <br></br>
                            <dd  className="labelName">
                                <h5>{this.state.hero_type}</h5>
                            </dd>
                        </dl>

                        <br></br>
                        <br></br>

                        <dl>
                            <dt className="labelName">
                                <h2>Alter Ego</h2>
                            </dt>
                            <br></br>
                            <br></br>
                            <dd  className="labelName">
                                <h5>{this.state.alter_ego}</h5>
                            </dd>

                            <br></br>
                            <br></br>

                            <dt className="labelName">
                                <h2>Species</h2>
                            </dt>
                            <br></br>
                            <br></br>
                            <dd  className="labelName">
                                <h5>{this.state.species}</h5>
                            </dd>
                        </dl>
                    </div>
                    
                </div>
                <br></br>
                <br></br>
                <Button color="danger" defaultValue={id} onClick={() => this.killHero(id)}>Eliminar</Button>
                <Button color="primary" href="/" >Retornar</Button>
            </div>
        );
    }
}


export default Delete;