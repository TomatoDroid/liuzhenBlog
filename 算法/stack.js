/**
 * 栈 先进后出  数据只涉及一端的添加和删除
 * 使用数组实现的栈--顺序栈
 * 使用链表实现的栈--链式栈
 * 
 *  */

let arrayStack = [];
arrayStack.pop(); // 删除并返回数组的最后一个元素 模拟出栈
arrayStack.push();// 向数组的末尾添加一个或更多的元素，返回新的长度  模拟入栈

// -------------链式栈-----------------
class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedStack{
    constructor(){
        this.top = null;
    }
    push(value){
        const node = new Node(value);
        if(this.top === null){
            this.top = node;
        }else{
            node.next = this.top;
            this.top = node;
        }
    }
    pop(){
        if(this.top === null){
            return -1;
        }
        const value = this.top.element;
        this.top = this.top.next;
        return value;
    }
    clear(){
        this.top = null;
    }
    display(){
        if(this.top !== null){
            let temp = this.top;
            while(temp !== null){
                console.log(temp.element);
                temp = temp.next;
            }
        }
    }
}

const linkedStack = new LinkedStack();
linkedStack.push(1);
linkedStack.push(2);
linkedStack.push(3);
linkedStack.display();
console.log('--------pop-------');
linkedStack.pop();
linkedStack.display();
console.log('--------clear-------');
linkedStack.clear();
linkedStack.display();

