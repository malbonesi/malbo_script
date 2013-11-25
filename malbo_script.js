API.on(API.DJ_ADVANCE, function() { $("#woot").click() });
API.on(API.CHAT, parseChat);

function parseChat(data){
    var msg = data.message;
    if (data.fromID = "50aeb40bd6e4a94f7747c5a4"){
        if (msg.match(/-purr/)) { API.sendChat("Meow?"); }
    } 
}

var menuHTML = "<div id='bot-menu'>Darwin</div>";

$('#chat-header').append(menuHTML);
$('#bot-menu').css({
position: 'absolute',
left: '192px',
top: '8px',
width: '110px',
height: '30px',
cursor: 'pointer'
})
