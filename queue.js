var Node = function(data) {
	this.data = data;
	this.next = null;
}

var Queue = function() {
	this.front = null;
	this.rear = null;
}

Queue.prototype.insert = function(data) {
	var nodeObj = new Node(data);
	if(this.rear === null) {
		this.rear = nodeObj;
		this.front = nodeObj;
	} else {
		var tempFront = this.front;
		while(tempFront.next != null) {
			tempFront = tempFront.next;
		}
		tempFront.next = nodeObj;
		this.front = nodeObj;
	}
}

Queue.prototype.delete = function() {
	var data;
	console.log('this.front is - ' + JSON.stringify(this.front))
	console.log('this.rear is - ' + JSON.stringify(this.rear))
	if(this.rear === null) {
		data = -1;
	} else if(this.front === this.rear){
		data = this.rear.data;
		this.front = null;
		this.rear = null;
	} else {
		data = this.rear.data;
		this.rear = this.rear.next;
	}
	return data;
}

Queue.prototype.print = function() {
	var tempRear = this.rear;
	var tempFront = this.head;
	if(tempRear === null) {
		console.log('-1');
	} else {
		while(tempFront != tempRear) {
			console.log(tempRear.data);
			tempRear = tempRear.next;
		}
	}
}

module.exports = Queue;