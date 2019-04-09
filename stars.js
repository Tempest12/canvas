// Space Color = 20, 55, 120?
var spaceColor = [0.078, 0.215, 0.470, 1.0];

var starsShaderProgram;

var starsIndexBuffer;
var starsVertexBuffer;
var starsColorBuffer;


function stars_init()
{
	starsShaderProgram = shader_utils_make_program(stars_color_vertex, stars_color_fragment);

	starsVertexBuffer = glContext.createBuffer();
	glContext.bindBuffer(glContext.ARRAY_BUFFER, starsVertexBuffer);

	let starPositions = [-0.5,  0.0, -0.5,
						  0.0,  0.5, -0.5,
						  0.5,  0.0, -0.5];

	glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(starPositions), glContext.STATIC_DRAW);


	starsColorBuffer = glContext.createBuffer();
	glContext.bindBuffer(glContext.ARRAY_BUFFER, starsColorBuffer);

	let starColors = [ 1.0 , 0.0, 0.0, 1.0,
					   0.0,  1.0, 0.0, 1.0,
					   0.0,  0.0, 1.0, 1.0];

	glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(starColors), glContext.STATIC_DRAW);
}


function stars_draw(deltaTime)
{
	glContext.clearColor(0.0, 1.0, 1.0, 1.0);
    glContext.clear(glContext.COLOR_BUFFER_BIT);

    glContext.enable(glContext.DEPTH_TEST);
    glContext.depthFunc(glContext.LEQUAL);

	glContext.useProgram(starsShaderProgram);

	let starsColorLocation  = glContext.getAttribLocation(starsShaderProgram, "inColor");
	let starsAttribLocation = glContext.getAttribLocation(starsShaderProgram, "inPosition");

	glContext.bindBuffer(glContext.ARRAY_BUFFER, starsColorBuffer);
	glContext.vertexAttribPointer(starsColorLocation, 4, glContext.FLOAT, false, 0, 0);
	glContext.enableVertexAttribArray(starsColorLocation);

	glContext.bindBuffer(glContext.ARRAY_BUFFER, starsVertexBuffer);
	glContext.vertexAttribPointer(starsAttribLocation, 3, glContext.FLOAT, false, 0, 0);
	glContext.enableVertexAttribArray(starsAttribLocation);

	glContext.drawArrays(glContext.TRIANGLES, 0, 3);
}
