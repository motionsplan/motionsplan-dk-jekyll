function segmentlength(x1, y1, z1, x2, y2, z2) {
    return Math.sqrt( Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2) + Math.pow(z1-z2, 2) );
}

function segmentlength2d(x1, y1, x2, y2) {
    return Math.sqrt( Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2) );
}

function anglebetweensegments(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
	var dotproduct = (x2-x1)*(x2-x3) + (y2-y1)*(y2-y3) + (z2-z1)*(z2-z3);
	angle = Math.acos( dotproduct / (segmentlength(x1, y1, z1, x2, y2, z2)*segmentlength(x2, y2, z2, x3, y3, z3) ) );
	return angle;
}

function anglebetweensegments2d(x1, y1, x2, y2, x3, y3) {
	var dotproduct = (x2-x1)*(x2-x3) + (y2-y1)*(y2-y3);
	angle = Math.acos( dotproduct / (segmentlength2d(x1, y1, x2, y2)*segmentlength2d(x2, y2, x3, y3) ) );
	return angle;
}