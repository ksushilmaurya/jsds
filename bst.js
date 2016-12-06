var Node = function(data) {
	this.data = data;
	this.left = null,
	this.right = null
}

var Bst = function() {
	this.root = null;
}

Bst.prototype.insert = function(data) {
	var bstObj = new Node(data);
	if(this.root === null) {
		this.root = bstObj;
	} else {
		var tempRoot = this.root;
		var beforeTempRoot;
		while(tempRoot !=null) {
			beforeTempRoot = tempRoot;
			if(data < tempRoot.data) {
				tempRoot = tempRoot.left;
			} else {
				tempRoot = tempRoot.right;
			}
		}
		if(data < beforeTempRoot.data) {
			beforeTempRoot.left = bstObj;
		} else {
			beforeTempRoot.right = bstObj;
		}
	}
}

Bst.prototype.inorder = function(tempRoot) {
	if(tempRoot !== null) {
		this.inorder(tempRoot.left);
		console.log(tempRoot.data);
		this.inorder(tempRoot.right);
	} else {
		return;
	}
}

var max = function(x,y) {
	if(x>y) {
		return x;
	}
	if(x<y) {
		return y;
	}
	return x;
}

Bst.prototype.height = function(tempRoot) {
	if(tempRoot === null) {
		return 0;
	} 
	return 1 + max(this.height(tempRoot.left) , this.height(tempRoot.right));
}

module.exports = Bst;
