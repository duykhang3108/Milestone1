import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class Calendar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listOfAppoinments: [],
            list: []
        }
    }
    fetchData() {
        console.log("data fetching")
        let url = "https://5cb2d49e6ce9ce00145bef17.mockapi.io/api/v1/appointment"
        fetch(url)
            .then(response => response.json())
            .then(data => {          
                var events =[]      
                data.forEach(e => {                   
                    var event = { title: e.title, date: e.meetingdate }                
                   events.push(event)
                })
                this.setState({list:events})
            })
    }
    componentWillMount() {
        this.fetchData();
    }
    render() {
        return (
            <div className="container">
                <FullCalendar
                    initialView="dayGridMonth"
                    plugins={[dayGridPlugin]}
                    events={this.state.list}
                />
            </div>
        )
    }
}
