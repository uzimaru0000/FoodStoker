'use strict'

const app = new Vue({
    el: "#app",
    data: {
        appName: "FoodStoker",
        dates: [
            
        ],
        buttonFlag: false
    },
    methods: {
        addList: function(e) {
            let rect = e.target.getBoundingClientRect();
            let span = document.createElement('div');
            span.setAttribute('class', 'ripple');
            span.setAttribute('style',
                styleAttribute('top', (e.y - rect.top - (rect.height / 2)) + 'px') +
                styleAttribute('left', (e.x - rect.left - (rect.width / 2)) + 'px')
            );
            e.target.appendChild(span);
            span.addEventListener('webkitAnimationEnd', () => {
                e.target.removeChild(span);
            });
        }
    }
});

const styleAttribute = (name, value) => {
    return name + ':' + value + ';';
};