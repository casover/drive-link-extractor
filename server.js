const express = require('express');
const axios = require('axios');
const { JSDOM } = require('jsdom');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/extract', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.json({ success: false, message: 'URL is required' });
    }

    try {
        const response = await axios.get(url);
        const dom = new JSDOM(response.data);
        const links = Array.from(dom.window.document.querySelectorAll('a'))
            .map(a => a.href)
            .filter(href => href.includes('drive.google.com'));

        res.json({ success: true, links });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
