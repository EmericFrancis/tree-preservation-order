const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.post('/here-now-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let herenow = req.session.data['location']

  if (herenow === 'here-yes') {
    res.redirect('add-1-yes')
  } else {
    res.redirect('add-1-no')
  }
})
