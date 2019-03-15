var canvas;
var glContext;

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
}
