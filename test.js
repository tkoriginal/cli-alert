const alert = require('./index.js')

alert()

alert({ type: 'success', msg: 'All Done!', name: 'Great' })
alert({ type: 'warning', msg: "You didn't add something!" })
alert({ type: 'info', msg: 'This is a cool package' })
alert({ type: 'error', msg: 'Something went wrong mate' })
