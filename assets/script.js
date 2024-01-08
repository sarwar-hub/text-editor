// Text editor





// Text bold
document.getElementById('text-bold').addEventListener('click', function(){
    // get text
    let text = document.getElementById('text');

    if (!this.dataset.clicked) {
        this.setAttribute('data-clicked', 'true');
        this.style.backgroundColor = '#B91C1C';
        text.style.fontWeight = 'bold';
    } else {
        this.removeAttribute('data-clicked', 'true');
        this.style.backgroundColor = 'transparent';
        text.style.fontWeight = 'normal';
    }
})



// Text italic
document.getElementById('text-italic').addEventListener('click', function(){
    // get text
    let text = document.getElementById('text');

    if (!this.dataset.clicked) {
        this.setAttribute('data-clicked', 'true');
        this.style.backgroundColor = '#B91C1C';
        text.style.fontStyle = 'italic';
    } else {
        this.removeAttribute('data-clicked', 'true');
        this.style.backgroundColor = 'transparent';
        text.style.fontStyle = 'normal';
    }
})



// Text underline
document.getElementById('text-underline').addEventListener('click', function(){
    // get text
    let text = document.getElementById('text');

    if (!this.dataset.clicked) {
        this.setAttribute('data-clicked', 'true');
        this.style.backgroundColor = '#B91C1C';
        text.style.textDecoration = 'underline';
    } else {
        this.removeAttribute('data-clicked', 'true');
        this.style.backgroundColor = 'transparent';
        text.style.textDecoration = 'none';
    }
})






// Text Alignment 


// Text left
document.getElementById('text-left').addEventListener('click', function(){
    // get text
    let text = document.getElementById('text');

    text.style.textAlign = 'left';
})




// Text center
document.getElementById('text-center').addEventListener('click', function(){
    // get text
    let text = document.getElementById('text');

    text.style.textAlign = 'center';
})






// Text right
document.getElementById('text-right').addEventListener('click', function(){
    // get text
    let text = document.getElementById('text');

    text.style.textAlign = 'right';
})






// Text size
document.getElementById('text-size').addEventListener('change', function(event){
    let size = event.target.value;
    let sizeInPx = size + 'px';
    let text = document.getElementById('text');
    text.style.fontSize = sizeInPx;
})








// Text case
document.getElementById('text-case').addEventListener('click', function(){

    let text = document.getElementById('text');
    text.style.textTransform = 'uppercase';
})




// Text color
document.getElementById('text-color').addEventListener('change', function(event){
    let color = event.target.value;
    let text = document.getElementById('text');
    text.style.color = color;
})