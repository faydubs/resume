// الحصول على الزر
const toggleButton = document.getElementById('toggleMode');

// التحقق من الوضع السابق عند تحميل الصفحة
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '✹';
}

// تغيير الوضع عند النقر على الزر
toggleButton.addEventListener('click', () => {
    // التبديل بين الوضعين
    document.body.classList.toggle('dark-mode');

    // حفظ الوضع الحالي في localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
        toggleButton.textContent = '✹';
    } else {
        localStorage.setItem('dark-mode', 'false');
        toggleButton.textContent = '☾';
    }
});
