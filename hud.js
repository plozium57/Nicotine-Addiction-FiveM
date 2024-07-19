const colour = { r: 24, g: 116, b: 205 }; // set this to the colour you want
const serverName = 'Mandora Roleplay'; // set this to the pause menu title you want

mp.events.add('playerReady', () => {
  mp.game.invoke('0xF314CF4F0211894E', 143, colour.r, colour.g, colour.b, 255); // Replace Michael colour
  mp.game.invoke('0xF314CF4F0211894E', 116, colour.r, colour.g, colour.b, 255); // Replace freemode colour
  mp.game.gxt.set('PM_PAUSE_HDR', serverName); // Replace map title
});
