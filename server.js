document.addEventListener('DOMContentLoaded', () => {
    const links = Array.from(document.querySelectorAll('a'))
        .map(a => a.href)
        .filter(href => href.includes('drive.google.com'));

    console.log('Extracted Google Drive links:', links);

    // عرض الروابط في الصفحة
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = links.map(link => `<a href="${link}" target="_blank">${link}</a>`).join('<br>');
    } else {
        console.error('Element with id "result" not found');
    }
});
