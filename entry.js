var Stack = require("./stack.js");
var Queue = require("./queue.js");
var Bst   = require("./bst.js");
 
// var stack1 = new Stack();
// stack1.push(10);
// stack1.push(20);
// stack1.push(30);
// stack1.push(40);
// stack1.push(50);
// stack1.print();
// console.log('size of stack is - ' + stack1.size());
// console.log('popped element is - ' + JSON.stringify(stack1.pop()))
// console.log('popped element is - ' + JSON.stringify(stack1.pop()))
// console.log('popped element is - ' + JSON.stringify(stack1.pop()))
// console.log('popped element is - ' + JSON.stringify(stack1.pop()))
// console.log('size of stack is - ' + stack1.size());
// console.log('popped element is - ' + JSON.stringify(stack1.pop()))
// console.log('popped element is - ' + JSON.stringify(stack1.pop()))
// console.log('size of stack is - ' + stack1.size());

// stack1.print();

// var queue1 = new Queue();
// for(var i=0;i<5500;i++) {
// 	queue1.insert(i);	
// }
// console.log('this.front is - ' + JSON.stringify(queue1.rear));
// queue1.insert(10);
// queue1.insert(20);
// queue1.insert(30);
// queue1.insert(40);
// queue1.insert(50);
// queue1.print();
// console.log('-----------------');
// console.log("deleted element is " + queue1.delete());
// console.log("deleted element is " + queue1.delete());
// console.log("deleted element is " + queue1.delete());
// console.log("deleted element is " + queue1.delete());
// console.log("deleted element is " + queue1.delete());
// console.log("deleted element is " + queue1.delete());
// console.log('-----------------');
// queue1.print();
// console.log('-----------------');
// queue1.insert(100);
// queue1.insert(200);
// queue1.print();

var bst1 = new Bst();
bst1.insert(30);
bst1.insert(15);
bst1.insert(20);
bst1.insert(40);
bst1.insert(60);
bst1.insert(10);
bst1.inorder(bst1.root);
console.log('--------------------');
console.log(bst1.height(bst1.root));