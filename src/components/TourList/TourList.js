import React, { Component } from 'react';
import Tour from '../Tour';
import './tourlist.scss';
import {tourData} from '../../TourData';


export default class TourList extends Component {
    state ={
        tours: tourData
    }
    removeTour = id=>{
        const {tours} = this.state;
        const sourtedTours = tours.filter(tour =>tour.id !== id);
        this.setState({
            tours:sourtedTours
        })

    }

    render() {
      
        const {tours} = this.state;
        return (
            <section className="tourlist">
                {

                    tours.map((tour)=>(<Tour key ={tour.id} tour={tour} removeTour ={this.removeTour}></Tour>))
          
                }
            </section>
        )
    }
}
