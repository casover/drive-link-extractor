document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetch-links').addEventListener('click', () => {
        const url = document.getElementById('site-url').value;
        // سيتم تنفيذ عملية جلب البيانات هنا
        fetchLinks(url);
    });

    function fetchLinks(url) {
        // محاكاة الروابط
        const links = [
            'https://drive.google.com/file/d/1abc2defGHIjklmNopQRstuvw/view',
            'https://drive.google.com/file/d/2def3ghiJKLmnopQrstUVwX/view'
        ];

        const resultElement = document.getElementById('result');
        resultElement.innerHTML = links.map(link => `
            <div class="link-container">
                <a href="${link}" target="_blank">${link}</a>
                <button class="copy-btn" data-link="${link}">نسخ</button>
            </div>
        `).join('');

        document.querySelectorAll('.copy-btn').forEach(button => {
            button.addEventListener('click', () => {
                const link = button.getAttribute('data-link');
                navigator.clipboard.writeText(link).then(() => {
                    alert('تم نسخ الرابط!');
                });
            });
        });
    }
});
