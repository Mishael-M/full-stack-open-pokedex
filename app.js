const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.get('/version', (req, res) => {
  res.send('New Version is deployed!') // change this string to ensure a new version deployed
})
