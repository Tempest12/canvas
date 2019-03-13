var canvas;
var twoDContext;

function core_init()
{
    canvas = document.getElementById("iCan");

    if(canvas.getContext)
    {
        twoDContext = canvas.getContext("2d");

        let array = new Uint8ClampedArray(4);

        array[0] = 0;
        array[1] = 255;
        array[2] = 255;
        array[3] = 255;

        let cyan = new ImageData(array, 1, 1);

        for(var width = 0; width < canvas.width; width++)
        {
            for(var height = 0; height < canvas.height; height++)
            {
                twoDContext.putImageData(cyan, width, height);
            }
        }
    }
}