import express from "express";


const app = express();
// This is just a start

app.get('/', (req, res) => {
    res.send('Welcome the richApi !');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
