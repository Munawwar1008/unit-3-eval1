append();


function append(){

    let data = JSON.parse(localStorage.getItem('products')) || [];
    let container = document.getElementById('all_products');
    container.innerHTML = null; 
    data.forEach(function(el, index){
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.image;
        let p1 = document.createElement('p1');
        p1.innerText = el.type;
        let p2 = document.createElement('p2');
        p2.innerText = el.desc;
        let p3 = document.createElement('p3');
        p3.innerText = el.price;
        let button = document.createElement('button');
        button.innerText = 'Remove Product';
        button.addEventListener('click', function(){
            remove(index);
        });
        div.append(img, p1, p2, p3, button);
        container.append(div);


    });


}



function remove(index){
    let data = JSON.parse(localStorage.getItem('products')) || [];

    let newdata = data.filter(function(el,i){
        if(i===index) {
            let bin = JSON.parse(localStorage.getItem('bin')) || [];
              bin.push(el);
         localStorage.setItem('bin', JSON.stringify(bin));
        }else{
            return i !== index;
        }
        
    });
    localStorage.setItem('products', JSON.stringify(newdata));
    append();
} 