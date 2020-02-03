let reviews = [
    {
        id: 1,
        rating: '5',
        comments: "Amazing technique. Plays Beautifully"
    },
    {
        id: 2,
        rating: '4',
        comments: "Very talented player!"
    }
]
let id = 3

function addReview (req, res) {
    req.body.id = id
    reviews.push(req.body)
    id++
    res.status(200).json(reviews)
}
function getReview (req, res) {
    res.status(200).json(reviews)
}
function editReview (req, res) {
    const {rating, comments} = req.body
    const updateId = req.params.id
    const reviewIndex = reviews.findIndex(reviews => reviews.id == updateId)
    let review = reviews[reviewIndex]
    
    reviews[reviewIndex] = {
        id:review.id,
        rating: rating || review.rating,
        comments: comments || review.comments
    }
    res.status(200).json(reviews)
}
function deleteReview (req, res) {
    const deleteId = req.params.id
    reviewIndex = reviews.findIndex(reviews => reviews.id == deleteId)
    reviews.splice(reviewIndex, 1)
    res.status(200).json(reviews)
}

module.exports = {
    addReview,
    getReview,
    editReview,
    deleteReview
}
