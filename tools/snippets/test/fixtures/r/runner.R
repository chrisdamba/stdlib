#!/usr/bin/env Rscript

# Set the precision to 16 digits:
options( digits = 16 );

#' Get the script filepath.
#'
#' @return The absolute path of this script
#'
#' @examples
#' filepath <- get_script_path()
get_script_path <- function() {
	cmdArgs <- commandArgs( trailingOnly = FALSE );
	needle <- "--file=";
	match <- grep( needle, cmdArgs );
	if ( length( match ) > 0 ) {
		# Rscript:
		filepath <- sub( needle, "", cmdArgs[match] );
	} else {
		ls_vars <- ls( sys.frames()[[1]] )
		if ( "fileName" %in% ls_vars ) {
			# Source'd via RStudio:
			filepath <- sys.frames()[[1]]$fileName;
		} else {
			# Source'd via R console:
			filepath <- sys.frames()[[1]]$ofile;
		}
	}
	return( normalizePath( filepath ) );
}

#' Convert a data structure to JSON.
#'
#' @param x A data structure to convert
#' @return JSON blob
#'
#' @examples
#' x <- seq( -6.5, 25, 0.5 );
#' json <- to_json( x );
to_json <- function( x ) {
	return( jsonlite::toJSON( x, digits = 16, auto_unbox = TRUE ) );
}

#' Generate an output absolute filepath based on the script directory.
#'
#' @param name An output filename
#' @return An absolute filepath
#'
#' @examples
#' filepath <- get_filepath( "data.json" );
get_filepath <- function( name ) {
	return( paste( source_dir, "/", name, sep = "" ) );
}

# Get the directory of this script:
source_dir <- dirname( get_script_path() );

# TODO: generate test fixture data (`x` and `y`), making sure to handle NaNs


# Convert fixture data to JSON:
x <- to_json( x );
y <- to_json( y );

# Write the data to file...
filepath <- get_filepath( "data.json" );
write( x, filepath );

filepath <- get_filepath( "expected.json" );
write( y, filepath );
