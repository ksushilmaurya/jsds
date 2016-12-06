var StackNode = function(data) {
	this.next = null;
	this.data = data;
}

var Stack = function() {
	this.head = null;
}

Stack.prototype.push = function(data) {
	var nodeObj = new StackNode(data);
	if(this.head === null) {
		this.head = nodeObj;
	} else {
		var tempHead = this.head;
		while (tempHead.next !=null) {
			tempHead = tempHead.next;
		}
		tempHead.next = nodeObj;
	}
}

Stack.prototype.pop = function() {
	var tempHead = this.head;
	if(tempHead === null) {
		return -1;
	}
	if(tempHead.next === null) {
		this.head = null;
		return tempHead.data;
	} else {
		while(tempHead.next.next !=null) {
			tempHead = tempHead.next;
		}
		var data = tempHead.next.data;
		tempHead.next = null;
		return data;
	}
}

Stack.prototype.print = function() {
	var tempHead = this.head;
	while(tempHead!==null) {
		console.log(tempHead.data);
		tempHead = tempHead.next;
	}
}

Stack.prototype.size = function() {
	var tempHead = this.head;
	var size = 0;
	while (tempHead!=null) {
		size++;
		tempHead = tempHead.next; 
	}
	return size;
}

module.exports = Stack;

// var stack1 = new Stack();
// stack1.push(10);
// stack1.push(20);
// stack1.push(30);
// stack1.push(40);
// stack1.push(50);
// stack1.print();
// console.log('popped element is - ' + JSON.stringify(stack1.pop()))
// console.log('popped element is - ' + JSON.stringify(stack1.pop()))
// console.log('popped element is - ' + JSON.stringify(stack1.pop()))
// console.log('popped element is - ' + JSON.stringify(stack1.pop()))
// console.log('popped element is - ' + JSON.stringify(stack1.pop()))
// console.log('popped element is - ' + JSON.stringify(stack1.pop()))
// stack1.print();
