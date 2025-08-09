'use strict';
/**
 * Accessibility recommendations for Visual Design
 * @author  Arturo Mora-Rioja
 *          Based on use cases from the LinkedIn Learning courses
 *          - Accessibility for Web Design (Derek Featherstone, 2022)
 *          - Simplifying Web Development with Accessibility Best Practices (Morten Rand-Hendriksen, 2021)
 * @version 1.0.0 January 2023
 */

/*
    Functions
*/
const activateElement = ((article) => {
    article.classList.remove('hidden');
    article.classList.add('visible');
});
const deactivateElement = ((article) => {
    article.classList.add('hidden');
    article.classList.remove('active');
});

// Shows an article and marks its menu option as active
const showArticle = (article) => {
    document.querySelectorAll('nav a').forEach((link) => {
        link.classList.remove('active');
        deactivateElement(document.querySelector(`main > article#${link.getAttribute('data-target')}`));
    });
    document.querySelector(`nav a[data-target="${article}"]`).classList.add('active');
    activateElement(document.querySelector(`#${article}`));
}

/*
    On page load
*/
document.querySelectorAll('a').forEach((link) => { 
    link.addEventListener('click', (e) => { e.preventDefault(); });
})

showArticle('keyb');    // "Home" is the article on keyboard functionality

// Navigation links are associated with their corresponding article 
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', function() {
        showArticle(this.getAttribute('data-target'));
    });
});

/*
    Keyboard functionality article.
    Onclick event listeners are added to the first paragraph (#content) 
    and to the link inside the second paragraph (#extra)
*/
document.querySelector('#content').addEventListener('click', () => {
    const output = document.querySelector('#output');
    output.innerText = 'Someone clicked on the first paragraph';
    activateElement(output);
});

document.querySelector('#extra a').addEventListener('click', (e) => {
    e.preventDefault();
    output.innerText = 'Someone clicked on the second paragraph';
    activateElement(document.querySelector('#output'));
});