API.on(API.DJ_ADVANCE, function() { $("#woot").click() });
API.on(API.CHAT, parseChat);

function parseChat(data){
    var msg = data.message;
    if (data.fromID = "50aeb40bd6e4a94f7747c5a4"){
        if (msg.match(/-purr/)) { API.sendChat("Meow?"); }
    } 
}
