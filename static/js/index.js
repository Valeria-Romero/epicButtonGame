console.log("Connection!");

let socket = io( 'http://localhost:8080');
let number = 0;

$("#push").on('click',function(event){
    event.preventDefault();
    console.log("Epic Clicked!");
    number++;
    socket.emit("new_count", number);
})
$("#reset").on('click', function(){
    console.log("Reset Clicked!");
    let number = 0;
    socket.emit("new_count", number);
})
socket.on("count", function(number){
    let displayCount = `This button has been pushed: ${number} times(s)!`;
    $('.counter').html(displayCount);
});
