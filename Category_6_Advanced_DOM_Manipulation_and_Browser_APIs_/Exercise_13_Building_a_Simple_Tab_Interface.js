
document.querySelectorAll('.tab').forEach(tab => {
tab.addEventListener('click', () => {
// Remove active class from all tabs and panels
document.querySelectorAll('.tab, .panel').forEach(el => el.classList.remove('active'));
// Activate clicked tab and its corresponding panel
tab.classList.add('active');
document.getElementById(tab.dataset.target).classList.add('active');
});
});

Explanation:
This exercise uses data attributes and class toggling to build a simple tab interface where clicking a tab shows the corresponding content.
