import React, {Component} from 'react';
import './index.css'

import {Button} from 'reactstrap';



class Home  extends Component{
    constructor(props){
        super(props);
        this.state = {
            heroList: [], 
            id: 0,
            name: "",
            hero_type: "",
            alter_ego: "",
            species: "",
            linkEdit: ""
        };

    }

    componentDidMount() {

        var heroes = []

        if (typeof localStorage["Heroes"] !== "undefined") {
            heroes = JSON.parse(localStorage.getItem("Heroes"));
        }
        else{
            localStorage.setItem("Heroes",JSON.stringify([
                {id: 1, name: "Spiderman", hero_type: "hero", alter_ego: "Peter Parker", species:"Human Mutate", src:require('./img/spidey.jpg')},
                {id: 2, name: "Deadpool", hero_type: "anti-hero", alter_ego: "Wade Wilson", species:"Human Mutate", src:require('./img/Deadpool.jpg')},
                {id: 3, name: "Red Hood", hero_type: "anti-hero", alter_ego: "Jason Todd", species:"Human", src:require('./img/RedHood.jpg')},
                {id: 4, name: "Batman", hero_type: "hero", alter_ego: "Bruce Wayne", species:"Human", src:require('./img/batman.jpg')},
                {id: 5, name: "Flash", hero_type: "hero", alter_ego: "Barry Allen", species:"Metahuman", src:require('./img/Flash.jpg')},
                {id: 6, name: "Superman", hero_type: "hero", alter_ego: "Clark Kent", species:"Kryptonian", src:require('./img/Superman.jpg')},
                {id: 7, name: "Wonder Woman", hero_type: "hero", alter_ego: "Diana Prince", species:"Amazonian-Olympian", src:require('./img/wonderwoman.jpg')},
                {id: 8, name: "Super Girl", hero_type: "hero", alter_ego: "Linda Danvers", species:"Kryptonian", src:require('./img/supergirl.jpg')},
                {id: 9, name: "Green Lantern (Jessica Cruz)", hero_type: "hero", alter_ego: "Jessica Cruz", species:"Human", src:require('./img/GreenLantern.jpg')}
            ]));

            heroes = JSON.parse(localStorage.getItem("Heroes"));
        }
        this.setState({ heroList: heroes });         

      }


    render(){
        const Heroes = this.state.heroList;

        const heroes = Heroes.map((hero) => {
            var edit = "/Edit?id=" + hero.id;
            var eliminar = "/Delete?id=" + hero.id;
            
            return(

                <div className="col-md-6">

                    <div className="card mt-5">
                        <div className="card-header">
                            <h3>{hero.name}</h3>
                            <h4>

                                <spam className="badge badge-pill badge-danger ml-2">
                                    {hero.hero_type}
                                </spam>
                            </h4>
                        </div>
                        <div className = "card-body">
                            <img src={hero.src}/>

                        </div>
                        <div className = "card-footer">
                            <h2>{hero.alter_ego}</h2>
                            

                            <spam className="badge badge-pill badge-primary ml-2">
                                {hero.species}
                            </spam>

                            <br></br>
                            <br></br>
                            <Button color="primary" href={edit}>Editar</Button ><Button color="danger" href={eliminar}>Eliminar</Button>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            
            <div className="Home">
                <br></br>
                <Button color="success" href="/Create">Crear Nuevo Heroe</Button>
                <div className="row mt-4">
                    {heroes}
                </div>
            </div>
            
          );
      
    }
};

export default Home;