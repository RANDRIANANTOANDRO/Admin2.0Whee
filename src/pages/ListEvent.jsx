import React , { Component, useState, useEffect } from 'react'
import Moment from "react-moment";
import 'moment/locale/fr'


import EventService from '../services/EventService'

const ListEvent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const logEvent = async () => {
          const resp = await EventService.getEvents();
          setEvents(resp.data);
        };
        logEvent();
      }, [events, setEvents]);
    
    
    return (
        <div class="event-schedule-area-two bg-color pad100">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title text-center">
                    <div class="title-text">
                        <h2>Evenements Enregistrés</h2>
                    </div>
                    <p>
                      
                    </p>
                </div>
            </div>
          
        </div>
    
        <div class="row">
            <div class="col-lg-12 col-12">
              
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade active show" id="home" role="tabpanel">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="text-center" scope="col">Date et Heure</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Titre</th>
                                        <th scope="col">Description</th>
                                        <th class="text-center" scope="col">Lieu</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map((val, key)=>{return( <tr class="inner-box">
                                        <th scope="row">
                                            <div className="event-date">
                                                <span> <Moment format="DD MMMM YYYY">{val.dateEvent}</Moment></span>
                                              
                                            </div>
                                        </th>
                                        <td>
                                            <div class="event-wrap">
                                            <div>
                                                <img src={val.image} alt="" className="eventImage"/>
                                            </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="event-wrap">
                                               
                                                <div class="meta">
                                                    <div class="organizers">
                                                        <a href="#">{val.titre}</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                           <p>{val.description}</p>
                                        </td>
                                        <td>
                                            <div class="primary-btn">
                                                <a class="btn btn-primary" href="#">{val.lieuEvent}</a>
                                            </div>
                                        </td>
                                    </tr>)})}
                                   
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="primary-btn text-center">
                    <a href="#" class="btn btn-primary">Télécharger Calendrier</a>
                </div>
            </div>

        </div>
     
    </div>
</div>
    )
}

export default ListEvent
