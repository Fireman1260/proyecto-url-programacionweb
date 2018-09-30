import React, {Component} from 'react';
import './index.css'

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Jumbotron,
    Container,
    Badge,
    Button
  } from 'reactstrap';

class Home  extends Component{
    constructor(props){
        super(props);
        this.state = {
            heroList: [], 
            activeIndex:0,
            id: 0,
            name: "",
            hero_type: "",
            alter_ego: "",
            species: "",
            linkEdit: ""
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
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

        this.setState({ heroList: heroes,
                        id: heroes[0]['id'],
                        name: heroes[0]['name'],
                        hero_type: heroes[0]['hero_type'],
                        alter_ego: heroes[0]['alter_ego'],
                        species: heroes[0]['species']});
      }

      onExiting() {
        
        this.animating = true;
        this.setState({ id: this.state.heroList[this.state.activeIndex]['id'],
                        name: this.state.heroList[this.state.activeIndex]['name'],
                        hero_type: this.state.heroList[this.state.activeIndex]['hero_type'],
                        alter_ego: this.state.heroList[this.state.activeIndex]['alter_ego'],
                        species: this.state.heroList[this.state.activeIndex]['species']});
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.heroList.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.heroList.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }

      goToEdit(){
          console.log(this.state)
      }

    render(){
        const {activeIndex} = this.state;
        const Heroes = this.state.heroList;
        const EditLink = "/Edit?id=" +  this.state.id

        const slides = Heroes.map((hero) => {
            return( 
                <CarouselItem value={hero.id}  onExiting={this.onExiting} onExited={this.onExited} key={hero.id}>
                    <img src={hero.src} alt={hero.alter_ego} /> 
                    <CarouselCaption captionText={hero.alter_ego} captionHeader={hero.name} />
                </CarouselItem>
            );
        });

        return (
            
            <div>
                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                    <CarouselIndicators items={Heroes} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel> 
                <Container>
                    <Jumbotron>
                            <div className="btn_align">
                                <Button color="info" href={EditLink}>Editar Heroe</Button>
                                &#32;
                                &#32;
                                <Button color="danger"> Eliminar Heroe</Button>
                            </div>
                            <br></br>
                            <br></br>
                            <h3 className="display-3">{this.state.name} <span className="italic-display ">&#123; {this.state.hero_type} &#125;</span></h3>
                            <br></br>
                            <h1 className="display-4">{this.state.alter_ego}</h1>
                            <h5 ><Badge>{this.state.species}</Badge></h5>
                            <br></br>
                    </Jumbotron>  
                </Container>
                       
                

            </div>
            
          );
      
    }
};

export default Home;