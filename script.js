document.addEventListener('DOMContentLoaded', () => {
    const links = Array.from(document.querySelectorAll('a'))
        .map(a => a.href)
        .filter(href => href.includes('drive.google.com'));

    console.log('Extracted Google Drive links:', links);

    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = links.map(link => `
            <div class="link-container">
                <a href="${link}" target="_blank">${link}</a>
                <button class="copy-btn" data-link="${link}">Copy</button>
            </div>
        `).join('');

        // Add event listener for copy buttons
        document.querySelectorAll('.copy-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const link = event.target.getAttribute('data-link');
                navigator.clipboard.writeText(link).then(() => {
                    alert('Link copied to clipboard!');
                }).catch(err => {
                    console.error('Failed to copy link: ', err);
                });
            });
        });
    } else {
        console.error('Element with id "result" not found');
    }
});
