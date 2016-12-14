// Write a program to return the nth node from the end of a linked list

//Algo - 

/*
1. take the first pointer and traverse upto nth node from begining.
2. take the second pointer and put it on first node.
3. start incrementing both pointers first and second by one untill second pointer reach the end.
4. print data of second pointer.
*/


var List = require("../../linkedList");

var list = new List();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
// list.display()

var nthNode = function(list, n) {
	var slowPtr = list.head;
	var fastPtr = list.head;
	var temp = 1;	
	while (fastPtr.next!=null) {
		if(temp>=n) {
			slowPtr = slowPtr.next;
		}
		fastPtr = fastPtr.next;	
		temp++;	
	}
	if(temp<n) { // handle boundry cases
		return -1;
	} else {
		return slowPtr.data;	
	}
}

console.log(nthNode(list,1));
