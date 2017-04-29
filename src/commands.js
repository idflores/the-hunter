/*
* Developer:    Israel Flores
*               https://github.com/idflores
*
* Script Name:  commands.js
* Purpose:      defines functionality of the bot
*
* License:      GPL v3.0
*/

var irc = require("irc");
var users = require("./users.js");

exports.OnMessage = function(from, channel, text, message)
{
  console.log(from, channel, text);
  var eval_text = text.split(" ");


  /*-- Everyone commands --*/

  // Debug greeting
  if (eval_text[0] == "!touch")
  {
    this.send("PRIVMSG", channel, "Hey " + from + ", that tickles!");
  }


  /*-- Moderator ONLY commands --*/

  if (from == (users.moderators))
  {

    /*-- TimeOut Commands --*/
    // _timeout_ commands
    if (eval_text[0] == "!snipe" && eval_text[1] != undefined)
    {
      // no timelimit specified
      // Syntax: !snipe <username> *
      if (eval_text[2] == undefined)
      {
        this.send("PRIVMSG", channel, "/timeout " + eval_text[1] + " 1");
        this.send("PRIVMSG", channel, eval_text[1] + ", you've been wounded!" +
                  " Jebaited " + "This is your warning " + "bleedPurple"
                );
      }
      // specified time
      // Syntax: !snipe <username> [seconds] *
      else if (!isNaN(eval_text[2]))
      {
        this.send("PRIVMSG", channel, "/timeout " + eval_text[1] + " " +
                  eval_text[2]);
        this.send("PRIVMSG", channel, eval_text[1] + ", you've been wounded!" +
                  " Jebaited " + "This is your warning " + "bleedPurple" +
                  " [" + eval_text[2] + " seconds healing time]"
                );
      }
    }

    // _permaban_ command
    if (eval_text[0] == "!smite"
        && eval_text[1] != undefined
        && eval_text[2] == undefined)
    {
      this.send("PRIVMSG", channel, "/ban " + eval_text[1]);
      this.send("PRIVMSG", channel, eval_text[1] + ", you are dead! And I'm \
                not sure there's hope of resurrection... GOWSkull");
    }

    // _unban_ command
    if (eval_text[0] == "!resurrect"
        && eval_text[1] != undefined
        && eval_text[2] == undefined)
    {
      this.send("PRIVMSG", channel, "/unban " + eval_text[1]);
      this.send("PRIVMSG", channel, "HumbleLife " + eval_text[1] +
                ", cherrish the life of this chat well...");
    }


    /*-- Developer ONLY commands --*/

    if (from == users.developer)
    {
      // Debug identity
      if (text == "@TheHunter_bot, who is your creator?")
      {
        this.send("PRIVMSG", channel, from + ", you are my creator!");
      }
    }
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
