function MinStack() {
    this.stack = [];
    this.min = [];
    this.len = 0;
};


MinStack.prototype.push = function(val) {
    if (this.len > 0) {
        const mm = this.min[this.len-1];
        if (val < mm) this.min.push(val);
        else this.min.push(mm);
        
    } else {
        this.min.push(val);
    }

    this.stack.push(val);
    this.len++;
    // console.log(this.len)
    // console.log(this.stack)
    // console.log(this.min)
};


MinStack.prototype.pop = function() {
    this.stack.pop()
    this.min.pop()
    this.len--;
};


MinStack.prototype.top = function() {
    console.log(this.stack[this.len - 1]);
    return this.stack[this.len - 1];
};


MinStack.prototype.getMin = function() {
    console.log(this.min[this.len - 1]);
    return this.min[this.len - 1];
};

var obj = new MinStack()
obj.push(3)
obj.push(2)
obj.push(3)
obj.top();
obj.getMin();

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */