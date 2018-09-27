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
    Row,
    Col
  } from 'reactstrap';

class Home  extends Component{
    constructor(props){
        super(props);
        this.state = {
            heroList: [], 
            activeIndex:0,
            activeId:1,
            name: "",
            hero_type: "",
            alter_ego: "",
            species: "",
            abilities: []
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
                {id: 1, name: "Spiderman", hero_type: "hero", alter_ego: "Peter Parker", species:"Human Mutate", abilities: ["Genius", "Superhuman strength", "Speed", "Durability", "Agility"], src:require('./img/spidey.jpg')},
                {id: 2, name: "Deadpool", hero_type: "anti-hero", alter_ego: "Wade Wilson", species:"Human Mutate", abilities: ["Healing Factor", "Marksman", "Swordsman", "Hand-to-hand Combat", "Teleportation"], src:require('./img/Deadpool.jpg')},
                {id: 3, name: "Red Hood", hero_type: "anti-hero", alter_ego: "Jason Todd", species:"Human", abilities: ["Marksman", "Martial Artist", "Hand-to-hand Combat", "High-tech equipment", "Enhanced strength"], src:require('./img/RedHood.jpg')},
                {id: 4, name: "Batman", hero_type: "hero", alter_ego: "Bruce Wayne", species:"Human", abilities: ["Genius", "Superhuman strength", "Martial Artist", "Hand-to-hand Combat", "Expert detective"], src:require('./img/batman.jpg')},
                {id: 5, name: "Flash", hero_type: "hero", alter_ego: "Barry Allen", species:"Metahuman", abilities: ["Immense superhuman speed", "Agility", "Stamina", "Electrokinesis", "Body vibration"], src:require('./img/Flash.jpg')},
                {id: 6, name: "Superman", hero_type: "hero", alter_ego: "Clark Kent", species:"Kryptonian", abilities: ["Superhuman strength", "Superhuman speed", "Superhuman vision", "Superhuman breath ", "Invulnerability", "Flight"], src:require('./img/Superman.jpg')},
                {id: 7, name: "Wonder Woman", hero_type: "hero", alter_ego: "Diana Prince", species:"Amazonian-Olympian", abilities: ["Superhuman strength", "Superhuman speed", "Reflexes", "Master Hand-to-Hand Combat", "Flight"], src:require('./img/wonderwoman.jpg')},
                {id: 8, name: "Super Girl", hero_type: "hero", alter_ego: "Linda Danvers", species:"Kryptonian", abilities: ["Superhuman strength", "Superhuman speed", "Superhuman vision", "Superhuman breath ", "Invulnerability", "Flight"], src:require('./img/supergirl.jpg')},
                {id: 9, name: "Green Lantern (Jessica Cruz)", hero_type: "hero", alter_ego: "Jessica Cruz", species:"Human", abilities: ["Flight", "Force field", "Generation of hard-light constructs", "Real-time translation of all-languages", "Space travel"], src:require('./img/GreenLantern.jpg')}
            ]));

            heroes = JSON.parse(localStorage.getItem("Heroes"));
        }

        this.setState({heroList: heroes});
      }

      onExiting() {
        this.animating = true;
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

    render(){
        const {activeIndex} = this.state;
        const Heroes = this.state.heroList;
        
        
        const slides = Heroes.map((hero) => {
            return( 
                <CarouselItem value={hero.id}  onExiting={this.onExiting} onExited={this.onExited} key={hero.id}>
                    <img src={hero.src} alt={hero.alter_ego} /> 
                    <CarouselCaption captionText={hero.alter_ego} captionHeader={hero.name} />
                </CarouselItem>
            );
        });

        if(Heroes[activeIndex] !== undefined){
           this.state.name = Heroes[activeIndex]['name']
           this.state.hero_type = Heroes[activeIndex]['hero_type']
           this.state.alter_ego = Heroes[activeIndex]['alter_ego']
           this.state.species = Heroes[activeIndex]['species']
           this.state.abilities = Heroes[activeIndex]['abilities']
 
        }
            

        return (
            <div>

                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                    <CarouselIndicators items={Heroes} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>             
                <Container>
                    <Row>
                        <Col md={{size: 12}}>
                            <Jumbotron>
                            <h3 className="display-3">{this.state.name} <span className="italic-display ">&#123; {this.state.hero_type} &#125;</span></h3>
                            <h1 className="display-5">{this.state.alter_ego}</h1>

                                {this.state.species}
                                {this.state.abilities}
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>

            </div>
            
          );
      
    }
};

export default Home;