document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');

        question.addEventListener('click', function() {
            answer.classList.toggle('visible');
            const arrow = question.querySelector('.arrow');
            arrow.style.transform = answer.classList.contains('visible') ? 'rotate(90deg)' : 'rotate(0deg)';
        });
    });
});
