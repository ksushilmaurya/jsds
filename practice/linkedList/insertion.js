// Insert nodes into a linked list in a sorted fashion
/*
	1. Let L is a sorted linkedList and data is a key to be inserted and ptr is pointer which points head of linked list.
	2. Start scanning the linked list from begining compare the ptr.data with data.
	3. if data is is greater than ptr.data insert that data next to it else ptr= ptr.data.
*/

var List = require("../../linkedList");

var list = new List();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
//list.display()

var insert = function(list, data) {
	var Node = {
		data : data,
		next : null
	}
	var tempHead = list.head;
	if(list.head.data > data) {
		Node.next = list.head;
		list.head = Node;
	} else {
		while(tempHead.next.next != null) {
			if(tempHead.next.data > data) {
				break;
			} else {
				tempHead = tempHead.next;
			} 
		}
		if(tempHead.next.next === null) {
			tempHead.next.next = Node;
		} else {
			Node.next = tempHead.next;
			tempHead.next = Node;
		}
	}
}

insert(list, 45);
list.display();

