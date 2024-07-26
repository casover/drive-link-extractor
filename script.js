document.addEventListener('DOMContentLoaded', () => {
    const extractButton = document.getElementById('extract-btn');
    if (extractButton) {
        extractButton.addEventListener('click', () => {
            const url = document.getElementById('url-input').value;
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(text => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(text, 'text/html');
                    const links = Array.from(doc.querySelectorAll('a'))
                        .map(a => a.href)
                        .filter(href => href.includes('drive.google.com'));
                    
                    const resultElement = document.getElementById('result');
                    if (resultElement) {
                        resultElement.innerHTML = links.map(link => `
                            <div class="link-container">
                                <a href="${link}" target="_blank">${link}</a>
                                <button class="copy-btn" data-link="${link}">Copy</button>
                            </div>
                        `).join('');
                        
                        document.querySelectorAll('.copy-btn').forEach(button => {
                            button.addEventListener('click', () => {
                                const link = button.getAttribute('data-link');
                                navigator.clipboard.writeText(link)
                                    .then(() => alert('Link copied to clipboard!'))
                                    .catch(err => console.error('Failed to copy link', err));
                            });
                        });
                    }
                })
                .catch(err => {
                    console.error('Error fetching the URL:', err);
                });
        });
    }
});
