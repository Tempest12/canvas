var stars_vertexShader = "\
\
attribute vec4 inPosition;\
\
varying vec2 spaceCoords\
\
uniform sampler2D ageBuffer;\
uniform sampler2D lastFrame;\
uniform vec4 spaceColor;\
uniform float maxAge; \
\
void main()\
{\
    gl_position = inPosition;\
}";

var stars_fragmentShader = "\
\
varying vec2 spaceCoords\
\
uniform sampler2D ageBuffer;\
uniform sampler2D lastFrame;\
uniform vec4 spaceColor;\
uniform float maxAge; \
\
\void main()\
{\
    gl_color = spaceColor\
}";

var stars_hello_vertex = "\
\
attribute vec4 inPosition;\
\
uniform highp vec4 color;\
\
void main()\
{\
    gl_Position = inPosition;\
}";

var stars_hello_fragment = "\
\
uniform highp vec4 color;\
\
void main()\
{\
    gl_FragColor = color;\
}";

var stars_color_vertex = "\
\
attribute vec4 inPosition;\
attribute vec4 inColor;\
\
varying highp vec4 fragColor;\
\
void main()\
{\
    gl_Position = inPosition;\
    fragColor = inColor;\
}";

var stars_color_fragment = "\
\
varying highp vec4 fragColor;\
\
void main()\
{\
    gl_FragColor = fragColor;\
}";