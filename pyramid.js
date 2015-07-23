var lines = 4;
var star, space;
var stars, spaces;
for (var curLine = 1; curLine <= 4; curLine++) {
	spaces = lines - curLine;
	space = "";
	for (var i = 0; i < spaces; i++) {
		space += " ";
	}
	stars = curLine * 2 - 1;
	star = "";
	for (var j = 0; j < stars; j++) {
		star += "*";
	}
	console.log(space + star);
}