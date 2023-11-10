if(typeof roContainer === "undefined")
    roContainer = document.body;

function notifyResize(){
    var body = document.body,
    html = document.documentElement;

    var height = {
        "max": Math.max( roContainer.scrollHeight, roContainer.offsetHeight, body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ),
        "roContainer.scrollHeight": roContainer.scrollHeight, 
        "roContainer.offsetHeight": roContainer.offsetHeight, 
        "body.scrollHeight": body.scrollHeight, 
        "body.offsetHeight": body.offsetHeight, 
        "html.clientHeight": html.clientHeight, 
        "html.scrollHeight": html.scrollHeight, 
        "html.offsetHeight": html.offsetHeight
    };

    if(document.referrer == "https://www.mobasketball.org" || document.referrer == "https://mobasketball.github.io/newsletters/index.html?ref=leagueapps"){
        parent.postMessage(height, "https://www.mobasketball.org/");
    } else if(document.referrer == "http://www.mobasketball.org/"){
        parent.postMessage(height, "http://www.mobasketball.org/");
    } else if(document.referrer == "http://mobasketball.org/"){
        parent.postMessage(height, "http://mobasketball.org/");
    } else if(document.referrer == "https://www.mobasketball.leagueapps.com/"){   
        parent.postMessage(height, "https://www.mobasketball.leagueapps.com/");
    } else if(document.referrer == "https://mobasketball.leagueapps.com/"){   
        parent.postMessage(height, "https://mobasketball.leagueapps.com/");
    }
}
// create an Observer instance
const resizeObserver = new ResizeObserver( entries => {
    setTimeout(notifyResize(), 0);
});

// start observing a DOM node
if($.inFrame()){
    resizeObserver.observe(roContainer);
    notifyResize();
}
