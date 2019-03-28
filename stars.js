// Space Color = 20, 55, 120?
var spaceColor = [0.078, 0.215, 0.470, 1.0];

var starsShaderProgram;

var starsIndexBuffer;
var starsVertexBuffer;


function stars_init()
{
	starsShaderProgram = shader_utils_make_program(stars_hello_vertex, stars_hello_fragment);

	starsVertexBuffer = glContext.createBuffer();
	glContext.bindBuffer(glContext.ARRAY_BUFFER, starsVertexBuffer);

	let starPositions = [-0.5,  0.0, -0.5,
						  0.0,  0.5, -0.5,
						  0.5,  0.0, -0.5];

	glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(starPositions), glContext.STATIC_DRAW);
}


function stars_draw(deltaTime)
{
	glContext.clearColor(0.0, 1.0, 1.0, 1.0);
    glContext.clear(glContext.COLOR_BUFFER_BIT);

    glContext.enable(glContext.DEPTH_TEST);
    glContext.depthFunc(glContext.LEQUAL);

	glContext.useProgram(starsShaderProgram);

	let starsColorLocation  = glContext.getUniformLocation(starsShaderProgram, "color");
	let starsAttribLocation = glContext.getAttribLocation( starsShaderProgram, "inPosition");

	glContext.uniform4fv(starsColorLocation, spaceColor);

	glContext.bindBuffer(glContext.ARRAY_BUFFER, starsVertexBuffer);
	glContext.vertexAttribPointer(starsAttribLocation, 3, glContext.FLOAT, false, 0, 0);
	glContext.enableVertexAttribArray(starsAttribLocation);

	glContext.drawArrays(glContext.TRIANGLES, 0, 3);
}
