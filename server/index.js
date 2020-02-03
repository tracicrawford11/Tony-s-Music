const express = require ('express')
const reviewsController = require ("./reviewsController")
const fanClubController = require ("./fanClubController")

const app = express()

app.use(express.json())

app.get('/api/reviews', reviewsController.getReview)
app.post('/api/reviews', reviewsController.addReview)
app.put('/api/reviews/:id', reviewsController.editReview)
app.delete('/api/reviews/:id', reviewsController.deleteReview)

app.get('/api/fans', fanClubController.getFan)
app.post('/api/fans', fanClubController.addFan)

app.listen(4000, () => console.log('Server listening on port 4000'))