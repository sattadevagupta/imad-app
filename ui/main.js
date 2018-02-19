//Counter code
var button =documet.getElementById('counter');
var counter =0;

button.onclick=function(){
    counter=counter+1;
    var span =documet.getElementById('count');

    span.innerHTML = counter.toString();
    
};
