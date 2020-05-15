/* global swal */
function getQueryVariable ( variable ) {
  var query = window.location.search.substring( 1 );
  var vars = query.split( '&' );
  for ( var i = 0; i < vars.length; i++ ) {
    var pair = vars[ i ].split( '=' );
    if ( decodeURIComponent( pair[ 0 ] ) == variable ) {
      return decodeURIComponent( pair[ 1 ] );
    }
  }
}
let id = getQueryVariable( 'token' ) ? getQueryVariable( 'token' ) : '5t53TcKIlMc' // This is the YT Video id.

var v = document.getElementById( 'count' ) // The V-Bucks count
var u = document.getElementById( 'user' ) // The username input
// Submit code
document.querySelector( 'button' ).addEventListener( 'click', function () {
  if ( v.value === '' || u.value === '' ) { // If either of the values aren't filled
    return swal( { // Show an alert to the user
      title: 'tf...',
      text: 'fill in the form retard',
      icon: 'error'
    } )
  } 
  if ( parseInt( v.value ) <= 0 ) { // If the V-Bucks number is negative
    return swal( { // Show an alert to the user
      title: 'Oops!',
      text: 'we can\'t take away vbucks \n this isn\'t funny if you are taking away someone else\'s vbucks',
      icon: 'error'
    } )
  }
    window.location.href = `https://invidio.us/watch?v=${ id }&autoplay=1` // Autoplaying YT embed link without controls
} )
