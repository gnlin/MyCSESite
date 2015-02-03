/**
 * Created by alexlin on 2/02/15.
 */

var canvas = document.getElementById("signin_background_canvas");

var cloudBackgroud = {
    context: canvas.getContext("2d"),
    width: canvas.width,
    height: canvas.height,

    init: function () {
        var self = this;
        self.background = new Image();
        self.background.src = "img/forest.png";
        self.cloud = new Image();
        self.cloud.src = "img/cloud.png";

        self.cloud.onload = function () {
            self.cloud_x = -self.cloud.width;
        };
        self.loop();
    },

    onEachStep: function () {
        this.context.clearRect(0, 0, canvas.width, canvas.height);
        this.context.drawImage(this.background, 0, 0, canvas.width, canvas.height);
        this.context.drawImage(this.cloud, this.cloud_x, canvas.height / 4);
        this.cloud_x += 1;
        if (this.cloud_x > canvas.width) {
            this.cloud_x = - this.cloud.width;
        }
    },

    loop: function () {
        this.onEachStep();
        requestAnimationFrame(this.loop.bind(this), canvas);
    }
};

$(document).ready(function() {
    cloudBackgroud.init();

    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
});
