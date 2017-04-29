/*
* Developer:    Israel Flores
*               https://github.com/idflores
*
* Script Name:  bot.js
* Purpose:      defines functionality of the bot
*
* License:      GPL v3.0
*/

var irc = require("irc");
var bot_config = require("./config.js");

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

// METHODS
function OnMessage(from, channel, text, message)
{
  console.log(from, channel, text);
  if (text == "!greeting")
  {
    TheHunter.send("PRIVMSG", channel, "Hello " + from + "! You have triggered my command!");
  }
}

function OnJoin(channel, nick, msgobj)
{
  console.log("Bot has joined channel", channel);
  console.log("nick", nick);
  console.log("msgobj", msgobj);
}

function OnError(message)
{
    console.log("IRC Error:", message);
}

// "main"
TheHunter.addListener("message", OnMessage);
TheHunter.addListener("action", OnMessage);
TheHunter.addListener("join", OnJoin);
TheHunter.addListener("error", OnError);
