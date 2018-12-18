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
        return currentNode !== null ? currentNode : -1;
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
            // 保存下一个节点的引用
            const next = currentNode.next;
            // 正常的添加节点
            currentNode.next = root.next;
            root.next = currentNode;
            // 改变当前节点
            currentNode = next;
        }
        this.head = root;                                                                              
    }
    // 环验证
    checkCircle(){
        let fast = this.head.next;
        let slow = this.head;
        while(fast !== null && fast.next !== null){
            fast = fast.next.next;
            slow = slow.next;
            if(fast === slow) return true;
        }
        return false;
    }
    // 删除倒数第K个节点
    removeByIndexFromEnd(index){
        if(this.checkCircle()) return false;
        let pos = 1;
        this.reverseList();
        let currentNode =  this.head.next;
        while(currentNode !== null && pos < index){
            currentNode = currentNode.next;
            pos++;
        }
        if(currentNode === null){
            console.log('无法删除最后一个节点或者该节点不存在');
            return false;
        }
        this.remove(currentNode.element);
        this.reverseList();
    }
    // 求中间节点
    findMiddleNode(){
        let fast = this.head.next;
        let slow = this.head.next;
        while(fast.next !== null && fast.next.next !== null){
            fast = fast.next.next;
            slow = slow.next;
        }
        console.log(slow);
        return slow;
    }
 }

 const mergeSortedList = function(listA,listB){
    if (!listA) {
        return listB
    }
    if (!listB) {
        return listA
    }
    let a = listA;
    let b = listB;
    let currentNode = resultList = new Node('head');
    while(a !== null && b !== null){
        if(a.element < b.element){
            currentNode.next = a;
            a = a.next;
        }else{
            currentNode.next = b;
            b = b.next;
        }
        currentNode = currentNode.next;
    }
    if(a !== null){
        currentNode.next = a;
    }else{
        currentNode.next = b;
    }
    return resultList;
}

 const sortedList1 = new LinkedList()
 sortedList1.insert(9, 'head')
 sortedList1.insert(8, 'head')
 sortedList1.insert(7, 'head')
 sortedList1.insert(6, 'head')
 sortedList1.display();
 const sortedList2 = new LinkedList()
 sortedList2.insert(21, 'head')
 sortedList2.insert(20, 'head')
 sortedList2.insert(19, 'head')
 sortedList2.insert(18, 'head')
//  console.log('-------------sort two list ------------')
//  let sortedList = mergeSortedLists(sortedList1.head.next, sortedList2.head.next)
//  while (sortedList !== null) {
//      console.log(sortedList.element)
//      sortedList = sortedList.next
//  }