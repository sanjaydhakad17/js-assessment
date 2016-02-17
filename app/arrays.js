exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
	 
	return arr.indexOf(item);

  },

  sum : function(arr) {
	  
	/*
		var total = 0;
		for (var i = 0, len = arr.length; i < len; i++) {
			total += arr[i];
		}
		return total; 
	*/
	
	//using join 
	//return eval(arr.join("+"))
	
	//Using jquery 
		
	var total = 0;
	$.each(arr,function() {
		total += this;
	});		
	
	return total;
	
  },

  remove : function(arr, item) {
	for (var pos=0; pos < arr.length; pos++){
		if (arr[pos] == item){
			var item = arr.splice(pos,1);
		}
	}
	return arr;
  },

  removeWithoutCopy : function(arr, item) {
	  
	var i, len;

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
        len = len - 1;
      }
    }

    return arr;

  },

  append : function(arr, item) {
	arr.push(item);
    return arr;
  },

  truncate : function(arr) {
	arr.pop();
	return arr;
  },

  prepend : function(arr, item) {
	arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
	arr.shift(arr);
    return arr;
  },

  concat : function(arr1, arr2) {
	 return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
	arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }

    return count;

  },

  duplicates : function(arr) {
    
	var i, out=[], obj={};
	
	for (i=0; i < arr.length; i++)
		obj[arr[i]] == undefined ? obj[arr[i]] ++ : out.push(arr[i]);
		return GetUnique(out);
	

	function GetUnique(arr) {
		return $.grep(arr, function(elem, index) {
		return index == $.inArray(elem, arr);
	});
}
  },

  square : function(arr) {
    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      ret.push(arr[i] * arr[i]);
    }

    return ret;

  },

  findAllOccurrences : function(arr, target) {
	var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === target) {
        ret.push(i);
      }
    }

    return ret;
  }
};
