API.on(API.DJ_ADVANCE, function() { $("#woot").click() });
API.on(API.CHAT, parseChat);


//This is a simple UI
var iconHTML = "<div id='bot-icon'>Darwin</div>";
var menuHTML = "<div id='bot-menu'><ul id='bot-options'><li>Greet</li><li>Facts</li><li>Cap: <input id='captext' type='text'></input></li></ul></div>";

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
fontFamily: '\'Open Sans\', sans-serif',
fontSize: '18px',
fontWeight: '400'
});

$('#bot-menu').css({
position: 'absolute',
left: '192px',
top: '38px',
width: '110px',
height: '100px',
color: '#8694B2',
textAlign: 'left',
fontFamily: '\'Open Sans\', sans-serif',
fontSize: '12px',
fontWeight: '0',
backgroundColor: '#111317',
display: 'none',
zIndex: '30000'
});

$('#bot-options').css({
listStyle: 'none'
});

$('#captext').css({
maxLength: '2',
size: '2',
width: '5px',
border: '1px solid #323742'
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
