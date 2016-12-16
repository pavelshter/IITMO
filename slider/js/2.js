(function(global) {
    'use strict';
    
    var slider = {
        currentSlide: 0,
        image: {},
        init: function (id) {
            this.elem = document.getElementById(id);
            this.elem.classList.add('slider'); 
            this.slides = [];  // хранить картинки в массиве
            this.image = document.getElementById(id+"-image");
        },
        add: function (imagePath, text) {
            var image = document.createElement('img');
            image.setAttribute('src', imagePath);
            image.setAttribute('alt', imagePath);
            if (this.image.src ==''){
                this.image.src = imagePath;
            }
        
            // добавление элементу аттрибута src со значением src="imh"
            // добавление элементу аттрибута alt со знанинием text 
            // добавление стиля <img src="img/pic1" alt="Picture">
//            this.elem.appendChild(image);
            this.slides.push(image); 
        },
        runSlideShow: function(){
            setInterval(this.nextSlide.bind(this),1500); // интервал полторы секунды
        },
        nextSlide: function () {
            
            //вывести след слайд, лучше с if 
            if (this.slides.length == this.currentSlide+1){
                this.currentSlide = 0;
            }else{
                this.currentSlide+= 1;
            }
            var x = this.slides[this.currentSlide];
            this.image.src = x.src;
            this.image.alt = x.alt;
        }
    }
    
    slider.init('slider');
    slider.add('img/picture1.jpg','Picture1');
    slider.add('img/picture2.jpg','Picture2');
    slider.add('img/picture3.jpg','Picture3');
    
    slider.runSlideShow();

    
}(window));