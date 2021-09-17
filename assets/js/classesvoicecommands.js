var cnthlms 
var daath
function cnth(){
    var cnth_lms = "http://lms.nuv.ac.in/course/view.php?id=390";
    var cnth_ch="https://teams.microsoft.com/l/channel/19%3aIT5aGYrJMU8fVJQTctyq8ebyzVh6TbkuolIz-Q90TKs1%40thread.tacv2/General?groupId=08b6c487-e3d0-4c1f-ab50-8a657d51c7e9&tenantId=d1b99a31-59dc-4039-b9c4-f6166b6bf0a4";
    var cnth_m="https://teams.microsoft.com/l/meetup-join/19%3Ameeting_ZThjYjNhYTktMzJiOS00NTg4LWJjOTEtZTFkZjVlNzljNzEz%40thread.v2/0?context=%7B%22Tid%22%3A%22d1b99a31-59dc-4039-b9c4-f6166b6bf0a4%22%2C%22Oid%22%3A%2290f88b24-8224-4466-9517-b4d27e276988%22%7D";
        var x =window.open(cnth_ch,'_blank');
        setTimeout(function() { x.close(); }, 1000);
        var y =window.open(cnth_m,'_blank');
        setTimeout(function() { y.close(); }, 1000);
        cnthlms =window.open(cnth_lms,'_blank');
    };
function closecnth(){
        cnthlms.close();
    };   
function daath(){
        var daath_lms ="http://lms.nuv.ac.in/course/view.php?id=387";
        var daath_ch="https://teams.microsoft.com/l/channel/19%3axjlbbcV6rnpIRHYNCA60lcfwtO78pedbMbPYfxp6MsU1%40thread.tacv2/General?groupId=e892f069-e85c-40cf-8b92-5a94c4c15b85&tenantId=d1b99a31-59dc-4039-b9c4-f6166b6bf0a4";        
        var x =window.open(daath_ch,'_blank');
        setTimeout(function() { x.close(); },5000);
        daath=window.open(daath_lms,'_blank');    
        };
function closedaath(){
    daath.close();
};
if (annyang) {

    const commands = {
        'cn': () => { cnth(); },
        'close cn': () => { closecnth(); },
        'd a a': () => { daath(); },
        'close d a a': () => { closedaath(); },
        
        
        
    };
    
    
    // Add our commands to annyang
    annyang.addCommands(commands);
    
    // Start listening.
    annyang.start();
    }