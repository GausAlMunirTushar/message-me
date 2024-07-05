const app = require('./app/app');
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})