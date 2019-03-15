function shader_utils_make_program(vertexSource, fragmentSource)
{
    let vertexId = shader_utils_create_shader(glContext.VERTEX_SHADER, vertexSource);
    let fragmentId = shader_utils_create_shader(glContext.FRAGMENT_SHADER, fragmentSource);

    if(vertexId == null || fragmentId == null)
    {
        return null;
    }

    let programId = glContext.createProgram();

    glContext.attachShader(programId, vertexId);
    glContext.attachShader(programId, fragmentId);

    glContext.linkProgram(programId);

    if(!glContext.getProgramParameter(programId, glContext.LINK_STATUS))
    {
        alert("Unabled to link program.  Maybe this will help: " + glContext.getProgramLogInfo(programId));
        return null;
    }

    return programId;
}

function shader_utils_create_shader(shaderType, source)
{
    let shaderId = glContext.createShader(shaderType);

    glContext.shaderSource(shaderId, source);

    glContext.compileShader(shaderId);

    if(!glContext.getShaderParameter(shaderId, glContext.COMPILE_STATUS))
    {
        alert("Shader failed to compile. Anything helpful here: " + glContext.getShaderInfoLog(shaderId));
        return null;
    }

    return shaderId;
}
