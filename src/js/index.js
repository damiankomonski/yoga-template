import * as bootstrap from 'bootstrap';

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
xhr.addEventListener('load', function(e){
    if(xhr.status === 200){
        console.log(xhr.response);
    }
});
xhr.send();