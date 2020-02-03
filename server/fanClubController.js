let fans = [
    {
        id: 1,
        name: 'Cameron Crawford',
        email: 'camcraw30@gmail.com'
    },
    {
        id: 2,
        name: 'Juston Forte',
        email: 'justonforte@yahoo.com'
    }
]
let id = 3

function addFan (req, res) {
    req.body.id = id
    fans.push(req.body)
    id++
    res.status(200).json(fans)
}
function getFan (req, res) {
    res.status(200).json(fans)
}
function updateFan (req, res) {
    const {name, email} = req.body
    const updateId = req.params.id
    const fanIndex = fans.findIndex(fans => fans.id == updateId)
    let fan = fans[fanIndex]

    fans[fanIndex] = {
        id: fan.id,
        name: name || fans.name,
        email: email || fans.email
    }
    res.status(200).json(fans)
}
function deleteFan (req, res) {
    const deleteId = req.params.id
    fanIndex = fans.findIndex(fans => fans.id == deleteId)
    fans.splice(fanIndex, 1)
    res.status(200).json(fans)
}
module.exports = {
    addFan,
    getFan,
    updateFan,
    deleteFan
}