var outlook;
var controla;
var lms;
var nuv;
var saksham;
var discord;
var gmail;
var github;
function opendiscord(){
    discord = window.open("https://discord.com/channels/@me")
};
function closediscord(){
    discord.close();
};

function opengmail(){
    gmail = window.open("https://mail.google.com/mail/u/0/#inbox")
};
function closediscord(){
    gmail.close();
};

function openoutlook(){
    outlook = window.open("https://outlook.office365.com/mail/inbox")
};

function closeoutlook(){
    outlook.close();
};
function opencontrola(){
    controla = window.open("https://controla.in/")
};

function closecontrola(){
    controla.close();
};
function openlms(){
    lms = window.open("http://lms.nuv.ac.in/")
};

function closelms(){
    lms.close();
};
function opennuv(){
    nuv = window.open("https://nuv.ac.in/pdf/AboutUs/Holiday_List.pdf")
};

function closenuv(){
    nuv.close();
};
function openwhatsapp(){
    whatsapp = window.open("https://web.whatsapp.com/")
};

function closewhatsapp(){
    whatsapp.close();
};
function opengithub(){
    github = window.open("https://github.com/")
};

function closegithub(){
    github.close();
};
function saksham(){
    saksham = window.open("https://discordapp.com/users/822023787037196338")
};

var google = function(tag) {
    var url = 'https://www.google.com.tr/search?q='+tag;
    
    window.open(url)
    console.log("it works")
  }


if (annyang) {

  const commands = {
    'outlook': () => { openoutlook(); },
    'close outlook': () => { closeoutlook(); },
    'control a': () => { opencontrola(); },
    'close control a': () => { closecontrola(); },
    'lms': () => { openlms(); },
    'close lms': () => { closelms(); },
    'holiday': () => { opennuv(); },
    'close holiday': () => { closenuv(); },
    'whatsapp': () => { openwhatsapp(); },
    'close whatsapp': () => { closewhatsapp(); },
    'saksham':() => {saksham();},
    'discord':() => {opendiscord();},
    'close discord':() => {closediscord();},
    'mail':() => {opengmail();},
    'close mail':() => {closegmail();},
    'search *tag': google,
    'github':() => {opengithub();},
    'close github':() => {closegithub();},
    
    
  };


  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
