import React, {Component} from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor(){
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data : [
                { title: "Grupo Edeline", category: "Ocio", slug: "grupo-edeline" }, 
                { title: "Sedan", category: "Publicidad", slug: "sedan" }, 
                { title: "Magma", category: "Cultura", slug: "magma" }
            ]
        };

        this.handleTitle = this.handleTitle.bind(this);

    }

    handleTitle(filter){
        this.setState({
            data: this.state.data.filter(item =>{
                return item.category === filter;
            })
        });
    }

    portfolioItems(){
        
        return this.state.data.map(item =>{
            return <PortfolioItem title={item.title} url = {"google.com"} slug= {item.slug}/>;
        });
    }

    
    render(){
        if(this.state.isLoading){
            return <div>Loading...</div>
        }
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>
                <hr />
                <button onClick= {()=> this.handleTitle("Ocio")}>Ocio</button>
                <button onClick= {()=> this.handleTitle("Publicidad")}>Publicidad</button>
                <button onClick= {()=> this.handleTitle("Cultura")}>Cultura</button>
                {this.portfolioItems()}
            </div>
        );
    }
}