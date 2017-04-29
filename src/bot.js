/*
* Developer:    Israel Flores
*               https://github.com/idflores
*
* Script Name:  bot.js
* Purpose:      this is where the bot lives :)
*
* License:      GPL v3.0
*/

var irc = require("irc");
var bot_config = require("./config.js");
var commands = require("./commands.js");

// the bot
var TheHunter;

// Connect to the Twitch Server and Channels specified in ./config.js
// Syntax: irc.Client(server, nick[, options])
TheHunter = new irc.Client(bot_config.server, bot_config.username,
  {
    channels: bot_config.channels,
    password: bot_config.oauth
  }
);

// Listeners
TheHunter.addListener("message", commands.OnMessage);
TheHunter.addListener("action", commands.OnMessage);
TheHunter.addListener("join", commands.OnJoin);
TheHunter.addListener("error", commands.OnError);
