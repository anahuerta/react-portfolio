import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form"

// Nj!GSqh6FvPpsB!

export default class PortfolioManager extends Component {
  constructor(){
    super();

    this.state={
      portfolioItems:[]
    };

    this.handleSuccesfulFormSubmission = this.handleSuccesfulFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
  }

  handleSuccesfulFormSubmission(portfolioItem){
    //TODO
    // ACTUALIZAR EL ESTADO DE PORTFOLIO ITEM
    // Y AÑADIR PORTFOLIOITEM A LA LISTA
  }

  handleFormSubmissionError(error){
    console.log("handleFormSubmissionError error", error)
  }

  getPortfolioItems(){
    axios
      .get('https://anahuerta.devcamp.space/portfolio/portfolio_items',{
        withCredentials:true
      }).then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        });
      })
      .catch(error => {
        console.log("error in getPortfolioItems", error);
      });
  }

  componentDidMount(){
    this.getPortfolioItems()
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm
            handleSuccesfulFormSubmission = {this.handleSuccesfulFormSubmission}
            handleFormSubmissionError = {this.handleFormSubmissionError}
          />
        </div>

        <div className="rigth-column">
          <PortfolioSidebarList data={this.state.portfolioItems}/>
        </div>

      </div>
    );
  }
}