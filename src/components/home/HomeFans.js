import React, {Component} from 'react'
import axios from 'axios'
import './Fans.css'

class HomeFans extends Component {
    constructor () {
        super ()
        this.state = {
            name: "",
            email: "",
            fans: []
        }
    }
    componentDidMount() {
        axios.get("/api/fans").then(response => {
            this.setState ({fans: response.data})
        })
    }
    handleClick = (e) => {
        e.preventDefault ()
        const {name, email} = this.state
        let body = {
            name: name,
            email: email,
            idInput: 0
        }
        axios.post('/api/fans', body)
        .then(response => {
            this.setState({fans: response.data})
        })
    }
    updateFan = () => {
        axios.put(`/api/fans/${this.state.idInput}`, {fan: this.state.body})
        .then(response => {
            this.setState({fans: response.data})
        })
    }
    deleteFan = () => {
        axios.delete(`/api/fans/${this.state.idInput}`)
        .then(response => {
            this.setState({fans: response.data})
        })
    }
        render () {
        let {fans} = this.state
        return (
            <div className='fans'>
                <form>
                    <input placeholder="name" onChange={e => this.setState({name: e.target.value})} />
                    <input placeholder="email" onChange={e => this.setState({email: e.target.value})} />
                    <button onClick={this.handleClick}>Submit to Join</button>
                </form>
                {fans.map(val => {
                    return (
                        <div className='fanEntries'>
                            <h1>{val.name}</h1>
                            <h1>{val.email}</h1>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default HomeFans;