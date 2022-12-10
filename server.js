const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('./dist/nims'));
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/dist/nims/index.html'))
);
app.listen(process.env.PORT || 4300, () => {
    console.log('Server listening on PORT 4300')
})