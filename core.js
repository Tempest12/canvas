var canvas;
var glContext;

var lastTime;

function core_init()
{
    canvas = document.getElementById("iCan");

    if(canvas.getContext)
    {
        glContext = canvas.getContext("webgl");

        if(glContext === null)
        {
            alert("Houston we have a problem.  No webGL. MonkaS");
            return;
        }

        glContext.clearColor(0.0, 1.0, 1.0, 1.0);
        glContext.clear(glContext.COLOR_BUFFER_BIT);
    }

    stars_init()

    requestAnimationFrame(core_run_loop);
}

function core_run_loop(currentTime)
{
    currentTime *= 0.001; //Convert to seconds I guess?
    let deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    stars_draw(deltaTime);

    requestAnimationFrame(core_run_loop);
}
