/*
* Developer:    Israel Flores
*               https://github.com/idflores
*
* Script Name:  commands.js
* Purpose:      defines functionality of the bot
*
* License:      GPL v3.0
*/

exports.OnMessage = function(from, channel, text, message)
{
  console.log(from, channel, text);
  if (text == "!greeting")
  {
    TheHunter.send("PRIVMSG", channel, "Hello " + from + "! You have triggered my command!");
  }
}

exports.OnJoin = function(channel, nick, msgobj)
{
  console.log("Bot has joined channel", channel);
  console.log("nick", nick);
  console.log("msgobj", msgobj);
}

exports.OnError = function(message)
{
    console.log("IRC Error:", message);
}
