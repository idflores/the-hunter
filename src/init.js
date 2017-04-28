/*
* Developer:    Israel Flores (idflores)
*
* Script Name:  init.js
* Purpose:      includes ability to initialize the bot
*
* License:      GPL v3.0
*/

var irc = require("irc");
var bot_config = require("./config.js");

var bot = new irc.Client(bot_config.server, bot_config.botName, {
  channels: bot_config.channels,
  password: bot_config.oauth
});
