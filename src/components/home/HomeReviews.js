import React, {Component} from 'react'
import axios from 'axios'
import './Home.css'

class HomeReviews extends Component {
    constructor () {
        super ()
        this.state = {
            rating: 0,
            comments: " ",
            idInput: 0,
            reviews: []
        }
    }
    componentDidMount() {
        axios.get("/api/reviews").then(response => {
            this.setState ({reviews: response.data})
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        const {rating, comments} = this.state
        let body = {
            rating: rating,
            comments: comments
        }
        axios.post('/api/reviews', body)
        .then(response => {
        this.setState({reviews: response.data})
    })
    }
    updateReview = () => {
        axios.put(`/api/reviews/${this.state.idInput}`, {rating: this.state.rating, comments: this.state.comments})
        .then(response => {
            this.setState({reviews: response.data})
        })
    }
    deleteReview = () => {
        axios.delete(`/api/reviews/${this.state.idInput}`)
        .then(response => {
            this.setState({reviews: response.data})
        })
    }
        render () {
        let {reviews} = this.state
        return (
            <div>
                <form >
                    <input type='number' placeholder="Rate 1-5" onChange={e => this.setState({rating: e.target.value})} />
                    <input placeholder="Comments" onChange={e => this.setState({comments: e.target.value})} />
                    <button onClick={this.handleClick}>Submit Review</button>
                    <br/>
                    <input type='number' placeholder="ID # to Edit" onChange={e => this.setState({idInput: e.target.value})} />
                    <input type='number' placeholder="New Rating 1-5" onChange={e => this.setState({rating: e.target.value})} />
                    <input placeholder="New Comments" onChange={e => this.setState({comments: e.target.value})} />

                    <button onClick={this.updateReview}>Submit New Review</button>
                    <br/>
                    <input type='number' placeholder="ID # to Delete" onChange={e => this.setState({idInput: e.target.value})} />
                    <button onClick={this.deleteReview}>Delete Review</button>
                </form>
                {reviews.map(val => {
                    return (
                        <div className='entries'>
                            <h1>{val.rating}</h1>
                            <h1>{val.comments}</h1>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default HomeReviews;