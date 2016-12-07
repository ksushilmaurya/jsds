var Node = function(data) {
	this.data = data;
	this.next = null;
}

var LinkedList = function() {
	this.head = null;
}

LinkedList.prototype.add = function(data) {
	var newNode = new Node(data);
	if(this.head === null) {
		this.head = newNode;
	} else {
		var tempNext = this.head;
		while(tempNext.next!==null) {
			tempNext = tempNext.next;
		}
		tempNext.next = newNode;
	}
}

LinkedList.prototype.display = function() {
	var tempNext = this.head;
	while(tempNext !== null) {
		console.log(tempNext.data);
		tempNext = tempNext.next;
	}
}

module.exports = LinkedList;