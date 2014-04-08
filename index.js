var processors = {
	year:function(d){
		var r = processors.month(d);
		r.setMonth(0);
		return r;
	},
	month:function(d){
		var r = processors.day(d);
		r.setDate(1);
		return r;
	},
	day:function(d){
		var r = processors.hour(d);
		r.setHours(0);
		return r;
	},
	hour:function(d){
		var r = processors.minute(d);
		r.setMinutes(0);
		return r;
	},
	minute:function(d){
		var r = new Date(d.getTime()); 
		r.setSeconds(0);
		return r;
	}
}

module.exports = function date_floor(date, resolution){
	date = new Date(date);
	resolution = resolution || 'day';
	var processor = processors[resolution];
	if(!processor){
		throw new Error('processor ' + resolution + ' not found');
	}
	return processor(date);
}
