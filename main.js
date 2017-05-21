'use strict'

const app = new Vue({
    el: "#app",
    data: {
        appName: "FoodStoker",
        dates: [
            {
                name: "にんじん",
                deadLine: "2017-06-01"
            },
            {
                name: "じゃがいも",
                deadLine: "2017-06-06"
            },
        ]
    }
});