'use strict';

// MODULES //

var join = require( 'path' ).join;
var semver = require( 'semver' );
var prefix = require( './stdlib.js' );
var indexOf = require( prefix+'@stdlib/utils/index-of' );


// VARIABLES //

var RE_ID = /(.+)\@([0-9]+\.[0-9]+\.[0-9]+)$/;


// FILTER //

/**
* Filters license results for packages directly depended on by the package root.
*
* @private
* @param {(ObjectArray|EmptyArray)} results - unfiltered results
* @param {boolean} bool - boolean indicating whether to include dev dependencies
* @returns {(ObjectArray|EmptyArray)} filtered results
*/
function filter( results, bool ) {
	var version;
	var devDeps;
	var parts;
	var root;
	var deps;
	var name;
	var out;
	var id;
	var i;

	// Find the root package...
	for ( i = 0; i < results.length; i++ ) {
		if ( results[ i ].root ) {
			root = results[ i ];
			break;
		}
	}
	root = require( join( root.pkg, 'package.json' ) );
	id = root.name + '@' + root.version;

	// Skip packages whose "parent" is not the root package...
	out = [];
	for ( i = 0; i < results.length; i++ ) {
		if ( results[ i ].root ) {
			continue;
		}
		if ( indexOf( results[ i ].parents, id ) !== -1 ) {
			out.push( results[ i ] );
		}
	}
	results = out;

	// Filter for packages which are directly depended on by the root package...
	deps = root.dependencies;
	devDeps = root.devDependencies;

	out = [];
	for ( i = 0; i < results.length; i++ ) {
		parts = results[ i ].id.match( RE_ID );
		name = parts[ 1 ];
		version = parts[ 2 ];
		if (
			deps.hasOwnProperty( name ) &&
			semver.satisfies( version, deps[ name ] )
		) {
			out.push( results[ i ] );
		}
		else if (
			bool &&
			devDeps.hasOwnProperty( name ) &&
			semver.satisfies( version, devDeps[ name ] )
		) {
			out.push( results[ i ] );
		}
	}
	return out;
} // end FUNCTION filter()


// EXPORTS //

module.exports = filter;