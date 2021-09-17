var outlook;
var controla;
var lms;
var nuv;
var saksham;
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
function saksham(){
    saksham = window.open("https://discordapp.com/users/822023787037196338")
};


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
    
    
  };


  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
