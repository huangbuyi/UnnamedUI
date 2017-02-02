
export default function range( len ) {
	return Array.apply( null, Array(len) ).map( function (_, i){
		return i
	})

	// ES6 version
	// [...Array(5).keys()]
} 

