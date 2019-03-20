// Space Color = 20, 55, 120?
var spaceColor;

var starsShaderProgram;
var starsVertexBuffer;

function stars_init()
{
    starsShaderProgram = shader_utils_make_program(stars_hello_vertex, stars_hello_fragment);
}


function stars_draw(deltaTime)
{

}
