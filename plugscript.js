//Hide video player, yet keep playback, and remove mouseenter event for visual consistency
$('#playback-container, .background, #no-dj').css('visibility', 'hidden');
$('#playback').off('mouseenter');

//Autowoot when dj advances
API.on(API.ADVANCE, woot);
function woot(){ $('#woot').click(); }
