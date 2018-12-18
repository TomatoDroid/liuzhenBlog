/**
 * 基于链表实现的队列。
 * 队列最大的特点就是先进先出，主要的两个操作就是入队和出队，
 * 跟栈一样，他既可以用数组来实现，也可用链表来实现，用数组
 * 实现的叫顺序队列，用链表实现的叫做链表队列，特别是长得像
 * 一个环的循环队列。在数组实现队列的时候，会有数据搬迁操作，
 * 要想解决数据搬迁到问题，我们就需要像环一样的循环队列。
 * 循环队列的关键就是确定好队空和队满的判定条件。
 */
class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class QueueBasedByLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    enQueue(value){
        if(this.head === null){
            this.head = new Node(value);
            this.tail = this.head;
        }else{
            this.tail.next = new Node(value);
            this.tail = this.tail.next;
        }
    }
    deQueue(){
        if(this.head !== null){
            const value = this.head.element;
            this.head = this.head.next;
            return value;
        }else{
            return -1;
        }
    }
}

const queue = new QueueBasedByLinkedList();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
let res = 0;
while(res !== -1){
    res = queue.deQueue();
    console.log(res);
}