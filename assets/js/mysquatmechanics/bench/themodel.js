function update(newValue)
{
	// If you have made it this far and intend to sort through the code below, please email me any errors you find so it can be updated. 
	// contact@mysquatmechanics.com

	// Get variables
	var upperarm = document.getElementById("upperarmslider").value;
	var forearm = document.getElementById("forearmslider").value;
	var shoulder = document.getElementById("shoulderslider").value;
	var grip = document.getElementById("gripslider").value;
	var flareangle = document.getElementById("flareslider").value;
	var height = document.getElementById("heightslider").value;
	var travel = document.getElementById("travelslider").value;
	var position = document.getElementById("positionslider").value;
	var plate = 22.5;
	
	// Write back values and conversion to inches
	document.getElementById("upperarmvalue").innerHTML = upperarm.concat(" cm");
	document.getElementById("forearmvalue").innerHTML = forearm.concat(" cm");
	document.getElementById("shouldervalue").innerHTML = shoulder.concat(" cm");
	document.getElementById("gripvalue").innerHTML = grip.concat(" cm");
	document.getElementById("flarevalue").innerHTML = flareangle.concat("°");
	document.getElementById("heightvalue").innerHTML = height.concat(" cm");
	document.getElementById("travelvalue").innerHTML = travel.concat(" cm");

	var shoulder2hand = grip/2 - shoulder/2;
	
	// Starting positions
	var shoulderxyz = [0.0, 50.0, shoulder/2];
	var barxyz = [0.0, shoulderxyz[1] + Math.sqrt( Math.pow(upperarm*1.0 + forearm*1.0, 2) - Math.pow(shoulder2hand, 2) ) - 0.001, grip/2];  // Subtract 0.001 from initial bar height otherwise the first while loop below wont solve for the top bar position.  Its either this or set the forearmangle increment to a finer angle, causing the code take longer to run �\_(?)_/�
	
	// Calc start and end angle of elbows from torso.  Used when the elbow tilt isnt locked to zero.
	startflare = Math.asin( shoulder2hand / (upperarm*1.0 + forearm*1.0) );
	endflare = flareangle * Math.PI / 180.0;
	
	// Arrays to hold positions
	var elbowx = new Array();
	var elbowy = new Array();
	var elbowz = new Array();
	var barx = new Array();
	var bary = new Array();
	var forearmlength = new Array();
	var upperarmlength = new Array();
	var elbowangle = new Array();
	var positionarray = new Array();

	// Arrays for moments
	var shouldermoment = new Array();
	var shouldermomentflexion = new Array();
	var shouldermomenthorizontal = new Array();	
	var elbowmoment = new Array();

	// Increments
	var heightinc = ( barxyz[1] - shoulderxyz[1] - height ) / 100.0;
	var travelinc = travel / 100.0;
	var flarelinc = (endflare - startflare) / 100.0;
	
	for (i = 0; i < 100; i++)
	{ 
		positionarray[i] = i;	

		// Straight Bar Path
		if (document.getElementById("checkstraight").checked) {
			barx[i] = barxyz[0] + travelinc * i;
			bary[i] = barxyz[1] - heightinc * i;		
			flareangle = startflare + flarelinc * i;	
		}			  	
		// Bridges Bar Path
		if (document.getElementById("checkBridges").checked) {	
			barx[i] = Bridgesx[i] * travel;
			bary[i] = barxyz[1] + (Bridgesy[i]-1)*( barxyz[1] - shoulderxyz[1] - height );
			flareangle = startflare + flarelinc * i * 2;
			// Reversing flare angle since the slider now goes from Up->Down->Up instead of Up->Down like with the staright bar path.
			if (i > 49) {
				flareangle = flareangle - flarelinc * (i-50) * 4;
			}
		}			  	
		// Kazmaier Bar Path
		if (document.getElementById("checkKazmaier").checked) {	
			barx[i] = Kazmaierx[i] * travel;
			bary[i] = barxyz[1] + (Kazmaiery[i]-1)*( barxyz[1] - shoulderxyz[1] - height );
			flareangle = startflare + flarelinc * i * 2;
			// Reversing flare angle since the slider now goes from Up->Down->Up instead of Up->Down like with the staright bar path.
			if (i > 49) {
				flareangle = flareangle - flarelinc * (i-50) * 4;
			}
		}
		
		//While loops below because Im too lazy to do maths properly.
		
		// If elbows locked to zero tilt
		if(document.getElementById("checklock").checked)
		{
			document.getElementById("elbow-flare").style.display = "none";

			var forearmangle = 0.00;
			do {
				elbowx[i] = barx[i];
				elbowy[i] = bary[i] - (forearm*1.0) * Math.sin(forearmangle);
				elbowz[i] = barxyz[2] + (forearm*1.0) * Math.cos(forearmangle);
				upperarmlength[i] = segmentlength(shoulderxyz[0], shoulderxyz[1], shoulderxyz[2], elbowx[i], elbowy[i], elbowz[i]);
				
				forearmangle = forearmangle + 0.01;
				if (forearmangle > 3.14) { 
					window.alert("You broke the model and it can not be solved :(");
					break; 
				}
			}
			while ( upperarmlength[i] > upperarm );
		}
		
		// If elbows are not locked
		if(!document.getElementById("checklock").checked)
		{
			document.getElementById("elbow-flare").style.display = "grid";

			bar2shoulder = segmentlength(shoulderxyz[0], shoulderxyz[1], shoulderxyz[2], barx[i], bary[i], barxyz[2]);

			// Convert to polar coordinates
			var x = barx[i];
			var y = bary[i]-shoulderxyz[1];
			var z = shoulder2hand;
			var radius = bar2shoulder;
			var theta = (Math.PI/2.0) - flareangle;//Math.acos(z/radius);
			var phi = Math.atan2(y,x);		
			
			// Increase the shoulder rotation angle down until it meets the condition that the forearm is the correct length.
			radius = upperarm;
			var countloops = 0;
			do {
				if (countloops === 314) { 
					window.alert("You broke the model and it can not be solved :(");
					break; 
				}
				
				elbowx[i] = radius * Math.sin(theta) * Math.cos(phi);
				elbowy[i] = radius * Math.sin(theta) * Math.sin(phi) + shoulderxyz[1];
				elbowz[i] = radius * Math.cos(theta) + shoulderxyz[2];
				
				forearmlength[i] = segmentlength(elbowx[i], elbowy[i], elbowz[i], barx[i], bary[i], barxyz[2] );
				
				phi = phi - 0.01;
				countloops = countloops + 1;
			}
			while ( forearmlength[i] < forearm );
		}
				
		// Sanity checking
		//upperarmlength[i] = segmentlength(shoulderxyz[0], shoulderxyz[1], shoulderxyz[2], elbowx[i], elbowy[i], elbowz[i]);
		//forearmlength[i] = segmentlength(elbowx[i], elbowy[i], elbowz[i], barx[i], bary[i], barxyz[2]);
		//elbowangle[i] = (180/Math.PI)*anglebetweensegments(shoulderxyz[0], shoulderxyz[1], shoulderxyz[2], elbowx[i], elbowy[i], elbowz[i], barx[i], bary[i], barxyz[2]);
		
		// Moments
		shouldermoment[i] = Math.sqrt( Math.pow(shoulderxyz[0]-barx[i], 2) + Math.pow(shoulderxyz[2]-barxyz[2], 2) );
		shouldermomenthorizontal[i] = barxyz[2] - shoulderxyz[2];
		shouldermomentflexion[i] = barx[i] - shoulderxyz[0];
		
		elbowmoment[i] = Math.sqrt( Math.pow(elbowz[i]-barxyz[2], 2) + Math.pow(elbowx[i]-barx[i], 2) );
		// Total moment on the elbow also includes rotation. Below calcs only moment and not rotation.
		elbowmoment[i] = elbowmoment[i] * Math.sin( (Math.PI/2) - anglebetweensegments2d(barxyz[2], barx[i], elbowz[i], elbowx[i], shoulderxyz[2], shoulderxyz[0]));
		
	}
	

	//--------------------------------------------------------------------------------------------------------------------
	// plot side view
	//--------------------------------------------------------------------------------------------------------------------
	//-----------------------
	// plot neck and head
	//-----------------------
	steps = 32;
	radius = 10;
	var headx = new Array();
	var heady = new Array();
	for(i=0; i<steps; ++i) {
		a = 2 * Math.PI / steps * i;
		headx[i] = radius * Math.cos(a) - 15;
		heady[i] = radius * Math.sin(a) + shoulderxyz[1] + 10;
	}

	headx[steps] = headx[0];
	heady[steps] = heady[0];

	var plothead = {
	  x: headx,
	  y: heady,
	  type: 'scatter',
	  mode: 'lines',
	  line: {
		color: 'red',
		width: 2
	  },
	  name: ''
	};
	
	//-----------------------
	// plot bar
	//-----------------------
	steps=32;
	radius=plate;
	var weightx = new Array();
	var weighty = new Array();
	for(i=0; i<steps; ++i) {
		a = 2 * Math.PI / steps * i;
		weightx[i] = radius * Math.cos(a) + barx[position];
		weighty[i] = radius * Math.sin(a) + bary[position];
	}
	weightx[steps] = weightx[0];
	weighty[steps] = weighty[0];

	var plotbar = {
	  x: weightx,
	  y: weighty,
	  type: 'scatter',
	  mode: 'lines',
	  line: {
		color: 'blue',
		width: 2
	  },
	  name: ''
	};
	
	//-----------------------
	// plot bar path
	//-----------------------
	var plotbarpath = {
	  x: barx,
	  y: bary,
	  type: 'scatter',
	  mode: 'lines',
	  line: {
		color: 'green',
		width: 2
	  },
	  name: ''
	};
		
	//-----------------------
	// plot bench
	//-----------------------
	var benchstartx = -22;
	var benchstarty = 45;
	var benchlength = 122;
	var benchthickness = 5;
	var plotbench = {
	  x: new Array( benchstartx, benchstartx+benchlength, benchstartx+benchlength, benchstartx, benchstartx ),
	  y: new Array( benchstarty, benchstarty, benchstarty-benchthickness, benchstarty-benchthickness, benchstarty ),
	  type: 'scatter',
	  mode: 'lines',
	  line: {
		color: 'blue',
		width: 2
	  },
	  name: ''
	};
	
	//-----------------------
	// plot arms and body
	//-----------------------
	var plotbody = {
	  x: new Array( 100, 110, 96, 100, 105, 66, shoulderxyz[0], elbowx[position], barx[position] ),
	  y: new Array( 5, 0.2, 0.2, 5, 35, shoulderxyz[1], shoulderxyz[1], elbowy[position], bary[position] ),
	  type: 'scatter',
	  mode: 'lines+markers',
	  line: {
		color: 'red',
		width: 2
	  },
	  name: ''
	};

	var data = [plotbody, plotbarpath, plotbar, plotbench, plothead];

	var layout = {
	  title: 'Benchpress Model',
	  xaxis: {
		range: [-50, 125],
		autorange: false
	  },
	  yaxis: {
		range: [0, 150],
		autorange: false
	  },
	  showlegend: false
	};

	Plotly.newPlot('model', data, layout);


	//-------------------------------------------------------------------------------------------------------------------
	// plot end view
	//-------------------------------------------------------------------------------------------------------------------
	//-----------------------
	// plot head and body
	//-----------------------
	steps = 32;
	radius = 10;
	var headx = new Array();
	var heady = new Array();
	for(i=0; i<steps; ++i) {
		a = 2 * Math.PI / steps * i;
		headx[i] = radius * Math.cos(a);
		heady[i] = radius * Math.sin(a)  + shoulderxyz[1] + 10;
	}

	headx[steps] = headx[0];
	heady[steps] = heady[0];

	var plothead = {
	  x: headx,
	  y: heady,
	  type: 'scatter',
	  mode: 'lines',
	  line: {
		color: 'red',
		width: 2
	  },
	  name: ''
	};
	
	//-----------------------
	// plot bench
	//-----------------------
	var benchwidth = 30;
	var benchstarty = 45;
	var benchthickness = 5;
	var plotbench = {
	  x: new Array( -benchwidth/2, -benchwidth/2, benchwidth/2, benchwidth/2, -benchwidth/2 ),
	  y: new Array( benchstarty, benchstarty-benchthickness, benchstarty-benchthickness, benchstarty, benchstarty ),
	  type: 'scatter',
	  mode: 'lines',
	  line: {
		color: 'blue',
		width: 2
	  },
	  name: ''
	};
	
	//-----------------------
	// plot bar
	//-----------------------
	var plotbar = {
	  x: new Array( -110, -72, -72, -67, -67, -40.5, -40.5, -40.5, 40.5, 40.5, 40.5, 67, 67, 72, 72, 110, 110, 72, 72, 67, 67, -67, -67, -72, -72, -110, -110),
	  y: new Array( -2.5+bary[position], -2.5+bary[position], -plate+bary[position], -plate+bary[position],-1.5+bary[position],-1.5+bary[position],1.5+bary[position],-1.5+bary[position],-1.5+bary[position],1.5+bary[position],-1.5+bary[position],-1.5+bary[position],-plate+bary[position],-plate+bary[position],-2.5+bary[position],-2.5+bary[position],2.5+bary[position],2.5+bary[position],plate+bary[position],plate+bary[position],1.5+bary[position],1.5+bary[position],plate+bary[position],plate+bary[position],2.5+bary[position],2.5+bary[position], -2.5+bary[position]),
	  type: 'scatter',
	  mode: 'lines',
	  line: {
		color: 'blue',
		width: 2
	  },
	  name: ''
	};
	
	//-----------------------
	// plot arms
	//-----------------------
	var plotarms = {
	  x: new Array( -barxyz[2], -elbowz[position], -shoulder/2, shoulder/2, elbowz[position], barxyz[2] ),
	  y: new Array( bary[position], elbowy[position], shoulderxyz[1], shoulderxyz[1], elbowy[position], bary[position]),
	  type: 'scatter',
	  mode: 'lines',
	  line: {
		color: 'red',
		width: 2
	  },
	  name: ''
	};
	var data = [plotarms, plotbar, plothead, plotbench];

	var layout = {
	  xaxis: {
		range: [-90, 90],
		autorange: false
	  },
	  yaxis: {
		range: [0, 150],
		autorange: false
	  },
	  showlegend: false
	};

	Plotly.newPlot('model2', data, layout);
	
	
	//-------------------------------------------------------------------------------------------------------------------
	// plot top view
	//-------------------------------------------------------------------------------------------------------------------
	//-----------------------
	// plot body
	//----------------------
/*	
	var plothipsfemur = {
	  x: new Array( -kneez[position]-hipwidth, -hipwidth, hipwidth, kneez[position]+hipwidth ),
	  y: new Array( kneex[position], hipx[position], hipx[position], kneex[position] ),
	  type: 'scatter',
	  mode: 'lines+markers',
	  line: {
		color: 'red',
		width: 2
	  },
	  name: ''
	};
*/

	//-----------------------
	// plot head and body
	//-----------------------
	steps = 32;
	radius = 10;
	var headx = new Array();
	var heady = new Array();
	for(i=0; i<steps; ++i) {
		a = 2 * Math.PI / steps * i;
		headx[i] = radius * Math.cos(a);
		heady[i] = radius * Math.sin(a)  - 15;
	}

	headx[steps] = headx[0];
	heady[steps] = heady[0];

	var plothead = {
	  x: headx,
	  y: heady,
	  type: 'scatter',
	  mode: 'lines',
	  line: {
		color: 'red',
		width: 2
	  },
	  name: ''
	};
	
	//-----------------------
	// plot bench
	//-----------------------
	
	var benchstartx = -22;
	var benchlength = 122;
	var benchwidth = 30;
	var benchstarty = 45;
	var benchthickness = 5;
	var plotbench = {
	  x: new Array( -benchwidth/2, -benchwidth/2, benchwidth/2, benchwidth/2, -benchwidth/2 ),
	  y: new Array( benchstartx, benchstartx+benchlength, benchstartx+benchlength, benchstartx, benchstartx ),
	  type: 'scatter',
	  mode: 'lines',
	  line: {
		color: 'blue',
		width: 2
	  },
	  name: ''
	};
	
	//-----------------------
	// plot bar
	//-----------------------
	var plotbar = {
	  x: new Array( -110, -72, -72, -67, -67, -40.5, -40.5, -40.5, 40.5, 40.5, 40.5, 67, 67, 72, 72, 110, 110, 72, 72, 67, 67, -67, -67, -72, -72, -110, -110),
	  y: new Array( -2.5+barx[position], -2.5+barx[position], -plate+barx[position], -plate+barx[position],-1.5+barx[position],-1.5+barx[position],1.5+barx[position],-1.5+barx[position],-1.5+barx[position],1.5+barx[position],-1.5+barx[position],-1.5+barx[position],-plate+barx[position],-plate+barx[position],-2.5+barx[position],-2.5+barx[position],2.5+barx[position],2.5+barx[position],plate+barx[position],plate+barx[position],1.5+barx[position],1.5+barx[position],plate+barx[position],plate+barx[position],2.5+barx[position],2.5+barx[position], -2.5+barx[position]),
	  type: 'scatter',
	  mode: 'lines',
	  line: {
		color: 'blue',
		width: 2
	  },
	  name: ''
	};
	
	//-----------------------
	// plot arms
	//-----------------------
	var plotarms = {
	  x: new Array( -barxyz[2], -elbowz[position], -shoulder/2, shoulder/2, elbowz[position], barxyz[2] ),
	  y: new Array( barx[position], elbowx[position], shoulderxyz[0], shoulderxyz[0], elbowx[position], barx[position]),
	  type: 'scatter',
	  mode: 'lines',
	  line: {
		color: 'red',
		width: 2
	  },
	  name: ''
	};
	var data = [plotarms, plotbar, plotbench, plothead];

	var layout = {
	  xaxis: {
		range: [-90, 90],
		autorange: false
	  },
	  yaxis: {
		range: [-50, 125],
		autorange: false
	  },
	  showlegend: false
	};

	Plotly.newPlot('model3', data, layout);
	
	
	//-------------------------------------------------------------------------------------------------------------------
	// plot stats
	//-------------------------------------------------------------------------------------------------------------------
	
	var data = [
	{ y: shouldermoment.slice(0, 50), x: bary.slice(0, 50), type: 'scatter', name: 'Shoulder total moment descending', line: { dash: 'dot' } },
	{ y: shouldermoment.slice(50, 100), x: bary.slice(50, 100), type: 'scatter', name: 'Shoulder total moment ascending', line: { dash: 'dot' } },
	{ y: shouldermomenthorizontal, x: bary, type: 'scatter', name: 'Shoulder moment horizontal', line: { dash: 'dot' } },
	{ y: shouldermomentflexion.slice(0, 50), x: bary.slice(0, 50), type: 'scatter', name: 'Shoulder moment flexion descending', line: { dash: 'dot' } },
	{ y: shouldermomentflexion.slice(50, 100), x: bary.slice(50, 100), type: 'scatter', name: 'Shoulder moment flexion ascending', line: { dash: 'dot' } },
	{ y: elbowmoment.slice(0, 50), x: bary.slice(0, 50), type: 'scatter', name: 'Elbow moment descending', line: { dash: 'dot' } },
	{ y: elbowmoment.slice(50, 100), x: bary.slice(50, 100), type: 'scatter', name: 'Elbow moment ascending', line: { dash: 'dot' } },
	//{ y: forearmlength, x: bary, type: 'scatter', name: 'forearm length', line: { dash: 'dot' } },	
	//{ y: upperarmlength, x: bary, type: 'scatter', name: 'upperarm length', line: { dash: 'dot' } },
	//{ y: elbowangle, x: bary, type: 'scatter', name: 'elbow angle', line: { dash: 'dot' } },	
	{ y: new Array(-50,50), x: new Array(bary[position],bary[position]), type: 'scatter', name: 'Current Position' }
	];
	
	// If Straight Bar Path
	if (document.getElementById("checkstraight").checked) {
		var data = [
		{ y: shouldermoment, x: bary, type: 'scatter', name: 'Shoulder total moment', line: { dash: 'dot' } },
		{ y: shouldermomenthorizontal, x: bary, type: 'scatter', name: 'Shoulder moment horizontal', line: { dash: 'dot' } },
		{ y: shouldermomentflexion, x: bary, type: 'scatter', name: 'Shoulder moment flexion', line: { dash: 'dot' } },
		{ y: elbowmoment, x: bary, type: 'scatter', name: 'Elbow moment', line: { dash: 'dot' } },
		//{ y: forearmlength, x: bary, type: 'scatter', name: 'forearm length', line: { dash: 'dot' } },	
		//{ y: upperarmlength, x: bary, type: 'scatter', name: 'upperarm length', line: { dash: 'dot' } },
		//{ y: elbowangle, x: bary, type: 'scatter', name: 'elbow angle', line: { dash: 'dot' } },	
		{ y: new Array(-50,50), x: new Array(bary[position],bary[position]), type: 'scatter', name: 'Current Position' }
		];
	}		

	var layout = {
	  xaxis: {
		range: [Math.min.apply(null, bary), Math.max.apply(null, bary)],
		autorange: false,
		title: 'Bar Height (cm)'
	  },
	  yaxis: {
		range: [-15, 35],
		autorange: false,
		showgrid: false,
		zeroline: true,
		showline: false,
		showticklabels: false,
		title: 'Moment'
	  },
	  legend: {
		xanchor:"left",
		yanchor:"top",
		y:1.1, 
		x:0.7,
		font: {
		  size: 12
		}
	  }
	};

	Plotly.newPlot('stats', data, layout);	
}

window.addEventListener("load", update);