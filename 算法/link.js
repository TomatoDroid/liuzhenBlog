/**
 * 链表
 * 单链表，有一个记录下个节点地址的指针叫做后继指针 next ,第一个节点是头结点，第二个节点是尾节点
 * 循环链表，双向链表
 * 与数组相比，链表更适合删除和插入数据，
 * 链表 插入删除O(1)    随机访问 O(n)
 * 数组 插入删除O(n)    随机访问 O(1)
 */

 /**
  * 单链表的插入，删除，查找操作
  * 链表中存储的是int数据
  */
/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 *
 */

 class Node{
     constructor(element){
        this.element = element;
        this.next = null;
     }
 }

 class LinkedList{
    constructor(){
        this.head = new Node('head');
    }
    //  根据value查找节点
    findByValue(item){
        let currentNode = this.head;
        while(currentNode !== null && currentNode.element !== item){
            currentNode = currentNode.next;
        }
        return currentNode === null ? -1 : currentNode;
    }
    // 根据index查找节点
    findByIndex(index){
        let currentNode = this.head;
        let pos = 0;
        while(currentNode !== null && pos !== index){
            currentNode = currentNode.next;
            pos++;
        }
        return currentNode === null ? -1 : currentNode;
    }
    // 指定元素向后插入
    insert(newElement,element){
        const currentNode = this.findByValue(element);
        if(currentNode === -1){
            console.log('未找到插入位置');
            return;
        }
        const newNode = new Node(newElement);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }
    // 查找前一个
    findPrev(item){
        let currentNode = this.head;
        while(currentNode !== null && currentNode.next.element !== item){
            currentNode = currentNode.next;
        }
        if(currentNode.next === null){
            return -1;
        }
        return currentNode;
    }
    // 根据值删除
    remove(item){
        const desNode = this.findByValue(item);
        if(currentNode === -1){
            console.log('未找到元素');
            return;
        }
        const prevNode = this.findPrev(item);
        prevNode.next = desNode.next;
    }
    // 显示所有节点
    display(){
        // 先检查是否为环
        if(this.checkCircle()) return false;
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(currentNode.element);
            currentNode = currentNode.next;
        }
    }
    // 尾插法 翻转单列表
    reverseList(){
        const root = new Node('head');
        let currentNode = this.head.next;
        while(currentNode !== null){
            const next = currentNode.next;
            currentNode.next = root.next;
            root.next = currentNode;
            currentNode = next;
        }
        this.head = root;                                                                              
    }

 }