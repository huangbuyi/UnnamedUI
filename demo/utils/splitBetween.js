
export default function splitBetween(target, pre, post){
	var s = ''
	if( target.indexOf(pre) === -1  ){
		return ''
	} 

	target = target.split(pre)[1]
	if( !post ){
		return target
	}
	if( target.indexOf(post) === -1  ){
		return ''
	} 
	return target.split(post)[0]
}