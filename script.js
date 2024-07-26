const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// تقديم الملفات الثابتة من مجلد docs
app.use(express.static(path.join(__dirname, 'docs')));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
