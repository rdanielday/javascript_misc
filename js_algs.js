/*=======================
 Binary Search algorithm
 =====================*/

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var count = 0;
    while (max >= min) {
        count += 1;
        guess = Math.floor((min + max) / 2);
        if (array[guess] === targetValue) {
            console.log(count);
            console.log(guess);
            return guess;
        } else if (array[guess] < targetValue) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }
	return -1;
};

/*========================
Selection sort algorithm:
=========================*/
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

var selectionSort = function(array) {
    for (var i = 0; i < array.length; i++) {
        var min = indexOfMinimum(array, i);
        swap(array, min, i);
    }
    return array;
};

/*======================
Insertion sort algorithm
========================*/

var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
};

var insertionSort = function(array) {
    for (var i = 0; i < array.length - 1; i++) {
        insert(array,i,array[i+1]);
    }
};

/*==================
Factorial algorithm
====================*/
var factorial = function(n) {
	if (n === 0) {
	    return 1;
	} else {
	    return n * factorial(n-1);
	}
};

/*==========================
Recursive exponent algorithm
============================*/
var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    println("Computing " + x + " raised to power " + n + ".");
    // base case
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return (1/power(x, -n));
    }
    if (isOdd(n)) {
        return (power(x, n-1) * x);
    }
    if (isEven(n)) {
        var evenPower = power(x, n/2);
        return (evenPower * evenPower);
    }
};

/*==================
Merge sort algorithm
====================*/
var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;
    while (i < lowHalf.length && j < highHalf.length) {
        if (lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i];
            i++;
            k++;
        } else {
            array[k] = highHalf[j];
            j++;
            k++;
        }
    }
    while (i < lowHalf.length) {
        array[k] = lowHalf[i];
        i++;
        k++;
    }
    while (j < highHalf.length) {
        array[k] = highHalf[j];
        j++;
        k++;
    }
};

var mergeSort = function(array, p, r) {
    if (r - p >= 1) {
        var q = Math.floor((r + p) / 2);
        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);
    }
};

/*=================
Quicksort algorithm
==================*/
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, p, r) {
    var q = p;
    for (var j = p; j < r; j ++) {
        if (array[j] <= array[r]) {
            swap(array, j, q);
            q++;
        }
    }
    swap(array, r, q);
    return q;
};

var quickSort = function(array, p, r) {
    if (r - p + 1 > 1) {
        var q = partition(array, p, r);
        quickSort(array, p, q - 1);
        quickSort(array, q + 1, r);
    }
};
