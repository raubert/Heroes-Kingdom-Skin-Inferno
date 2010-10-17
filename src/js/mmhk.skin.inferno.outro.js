";

	// add the custom CSS to the page
	var elt = document.createElement( "style" );
	elt.setAttribute( "type", "text/css" );
	if ( elt.styleSheet ) {
		elt.styleSheet.cssText = css;
	} else {
		elt.appendChild( document.createTextNode(css) );
	}
	document.getElementsByTagName( "head" )[0].appendChild( elt );

	css = null;

})();