import React, {Component} from "react";
import axios from "axios";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor(){
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data : []
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

    getPortfolioItems(){
        axios
          .get('https://anahuerta.devcamp.space/portfolio/portfolio_items')
          .then (response =>  {
            //console.log("response data",response);
            this.setState({
              data: response.data.portfolio_items
            })
          })
          .catch (error=> {
           console.log(error);
          })
      }

    portfolioItems(){
        return this.state.data.map(item =>{
            // console.log("item data", item); Forma de ver el tipo de datos que tenemos en la API
            // DEPURADOR/ DEBUGGER
            //debugger;
            return (<PortfolioItem key= {item.id} item={item}/>);
        });
    }

    componentDidMount(){
        this.getPortfolioItems();
    }

    render(){
        if(this.state.isLoading){
            return <div>Loading...</div>
        }

        return(
            <div>
                <h2>{this.state.pageTitle}</h2>
                <hr />
                <button onClick= {()=> this.handleTitle("Software")}>Software</button>
                <button onClick= {()=> this.handleTitle("Hardware")}>Hardware</button>
                <button onClick= {()=> this.handleTitle("E-Commerce")}>E-Commerce</button>
                {this.portfolioItems()}
            </div>
        );
    }
}