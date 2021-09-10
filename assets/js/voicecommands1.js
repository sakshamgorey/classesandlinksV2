var outlook;
var controla;
var lms;
var nuv;

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
    nuv = window.open("https://nuv.ac.in/")
};

function closenuv(){
    nuv.close();
};
if (annyang) {
  // Let's define a command.
  const commands = {
    'outlook': () => { openoutlook(); },
    'close outlook': () => { closeoutlook(); },
    'control a': () => { opencontrola(); },
    'close control a': () => { closecontrola(); },
    'lms': () => { openlms(); },
    'close lms': () => { closelms(); },
    'n u v': () => { opennuv(); },
    'close n u v': () => { closenuv(); },
    
    
  };


  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
