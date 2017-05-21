'use strict'

let date = new Date();

const app = new Vue({
    el: "#app",
    data: {
        appName: "FoodStoker",
        dates: [],
        buttonFlag: false,
        foodName: '',
        deadLine: date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + (date.getDate()+1)).slice(-2)
    },
    methods: {
        ripple: function(e) {
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
            this.buttonFlag = !this.buttonFlag;
        },
        modalOff: function(e) {
            this.buttonFlag = !this.buttonFlag;
            this.foodName = '';
            this.deadLine = date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + (date.getDate()+1)).slice(-2);
        },
        addList: function() {
            let date = {
                name: this.foodName,
                deadLine: this.deadLine,
                flag: true
            };
            this.dates.push(date);
            this.modalOff();
        },
        removeList: function(index, e) {
            // this.dates[index].flag = false;
            // e.target.parentNode.addEventListener("webkitAnimationEnd", () => this.dates.splice(index, 1));
            this.dates.splice(index, 1)
        }
    },
    computed: {
        nowDate: function() {
            return date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + (date.getDate()+1)).slice(-2);
        }
    }
});

const styleAttribute = (name, value) => {
    return name + ':' + value + ';';
};