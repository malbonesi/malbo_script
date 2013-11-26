API.on(API.DJ_ADVANCE, function() { $("#woot").click() });
API.on(API.CHAT, parseChat);

var iconHTML = "<div id='bot-icon'>Darwin</div>";
var menuHTML = "<div id='bot-menu'>Heyo</div>";

$('#chat-header').append(iconHTML, menuHTML);
$('#bot-icon').css({
position: 'absolute',
left: '192px',
top: '8px',
width: '110px',
height: '30px',
cursor: 'pointer',
color: '#8694B2',
textAlign: 'center',
borderStyle: 'solid',
borderWidth: '1px' 
});

$('#bot-icon').click(function() { $('#bot-menu').slideToggle('fast'); });

function parseChat(data){
    var msg = data.message;
    if (data.fromID = "50aeb40bd6e4a94f7747c5a4"){
        if (msg.match(/-purr/)) { API.sendChat("Meow?"); }
    } 
}

/*
position:absolute;
left:192px;
width:110px;
background:#111317;
overflow:hidden;
z-index:30000;
display:none
*/
