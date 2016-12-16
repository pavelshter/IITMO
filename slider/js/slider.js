(function() {
    'use strict';
    var h4 = document.createElement('h4');
    var p = document.createElement('p');
    var slide = document.createTextNode('Первый слайд');
    var text = document.createTextNode('Текст');
    h4.appendChild(slide);
    p.appendChild(text);
    var li1 = document.createElement('li');
    li1.classList.add('slide-1');
    li1.classList.add('active');
    li1.appendChild(h4);
    li1.appendChild(p);
    
    
    var h4 = document.createElement('h4');
    var p = document.createElement('p'); 
    var slide = document.createTextNode('Второй слайд');
    var text = document.createTextNode('Текст');
    h4.appendChild(slide);
    p.appendChild(text);
    var li2 = document.createElement('li');
    li2.classList.add('slide-2');
    li2.classList.add('active');
    li2.appendChild(h4);
    li2.appendChild(p);
    
    
    var h4 = document.createElement('h4');
    var p = document.createElement('p');
    var slide = document.createTextNode('Третий слайд');
    var text = document.createTextNode('Текст');
    h4.appendChild(slide);
    p.appendChild(text);
    var li2 = document.createElement('li');
    li2.classList.add('slide-3');
    li2.classList.add('active');
    li2.appendChild(h4);
    li2.appendChild(p);
    
    
    var ul = document.createElement('ul');
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    
    var span1 = document.createElement('span');
    span1.classList.add('fa');
    span1.classList.add('fa-angle-left');
    span1.classList.add('arrow-prev');
    var span2 = document.createElement('span2');
    span2.classList.add('fa');
    span2.classList.add('fa-angle-right');
    span2.classList.add('arrow-next');
    
    var elem = document.getElementById('slider');
    elem.appendChild(ul);
    elem.appendChild(span1);
    elem.appendChild(span2);
    
}());