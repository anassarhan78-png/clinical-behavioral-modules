function toggleAnswer(element) {
    const qaItem = element.closest('.qa-item');
    const answer = qaItem.querySelector('.qa-answer');
    const icon = element.querySelector('.toggle-icon');
    if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        if (icon) icon.textContent = '▼';
    } else {
        answer.classList.add('show');
        if (icon) icon.textContent = '▲';
    }
}

// تحميل الوحدات ديناميكياً لو أردت، لكن الأسهل أن كل وحدة صفحة مستقلة
