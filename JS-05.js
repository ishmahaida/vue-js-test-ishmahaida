function duplicate(city){
	results = []
	a = ""
	citySorted = city.sort()
	for(i = 0; i<citySorted.length; i++){
		if(a != citySorted[i]){
			results.push(citySorted[i])
			a = citySorted[i]
		}
	}
	return results
}
