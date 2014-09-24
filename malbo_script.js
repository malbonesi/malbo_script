$('#playback-container, .background, #no-dj').css('visibility', 'hidden');
$('#playback').off('mouseenter');

//Add app-left to include user-list
//Can probably piggy-back on whatever is used for responsive design. Just take the height and stuff from app-right
//Should probably set up element before hand in an object or something?
$('.app-right').before("<div id='app-left'></div>");
var chatClone = $('chat').clone();
$('#app-left').append(chatClone);

API.on(API.ADVANCE, function() { $('#woot').click(); });
API.on(API.CHAT, parseChat);

function parseChat(data){

    var msg = data.message;
    
    if (data.fromID == '50aeb40bd6e4a94f7747c5a4'){   
        if (msg == '-purr') { API.sendChat('Meow?'); }
    }
}
