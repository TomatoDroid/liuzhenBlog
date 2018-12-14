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
    findByValue(item){
        let currentNode = this.head;
        while(currentNode !== null  && currentNode.element !== item){            
            currentNode = currentNode.next;
        }
        return currentNode === null ? -1 : currentNode;
    }
    findByIndex(index){
        let currentNode = this.head;
        let i = 0;
        while(currentNode !== null && i !== index){
            currentNode = currentNode.next;
            i++;
        }
        return currentNode === null ? -1 : currentNode;
    }
    insert(newElement,element){
        let currentNode = this.findByValue(element);
        if(currentNode === -1){
            console.log('要插入的节点不存在');
            return;
        }
        let newNode = new Node(newElement);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }
    findPrev(item){
        let currentNode = this.head;
        while(currentNode.next !== null && currentNode.next.element !== item){
            currentNode = currentNode.next;
        }
        return currentNode === null ? -1  : currentNode;
    }
    remove(item){
        let desNode = this.findByValue(item);
        if(desNode === -1){
            console.log('找不到该元素');
            return;
        }
        let prevNode = this.findPrev(item);
        prevNode.next = desNode.next;
    }
    display(){
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(currentNode.element);
            currentNode = currentNode.next;
        }
    }
    reverseList(){
        let root = new Node('head');
        let currentNode = this.head.next;
        while(currentNode !== null){
            let next = currentNode.next;
            currentNode.next = root.next;
            root.next = currentNode;

            currentNode = next;
        }
        this.head = root;
    }
    checkCircle(){
        let first = this.head.next;
        let slow = this.head;
        while(first !== null && first.next !== null){
             first = first.next.next;
             slow = slow.next;
             if(first === slow) return true;
        }
        return false;
    }
    removeIndexFromEnd(index){
        this.reverseList();
        let currentNode = this.head.next;
        let pos = 1;
        while(currentNode !== null && pos < index){
            currentNode = currentNode.next;
            pos++;
        }
        if(currentNode === null){
            console.log('要删除的节点不存在');
            return;
        }
        this.remove(currentNode.element);
        this.reverseList();
    }
    findMiddleNode(){
        let first = this.head;
        let slow = this.head;
        while(first.next !== null && first.next.next !== null){
            first = first.next.next;
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

    let a = listA
    let b = listB
    let resultList = undefined
    if (a.element < b.element) {
        resultList = a
        a = a.next
    } else {
        resultList = b
        b = b.next
    }
    let currentNode = resultList
    while (a !== null && b !== null) {
        if (a.element < b.element) {
            currentNode.next = a
            a = a.next
        } else {
            currentNode.next = b
            b = b.next
        }
        currentNode = currentNode.next
    }

    if (a != null) {
        currentNode.next = a
    } else {
        currentNode.next = b
    }
    return resultList
}


const LList = new LinkedList()
LList.insert('chen', 'head')
LList.insert('curry', 'chen')
LList.insert('sang', 'head')
LList.insert('zhao', 'head')
LList.display();
// console.log('-------------start reverse------------')
// LList.reverseList()
// LList.display()
// console.log('-------------check circle------------')
// console.log(LList.checkCircle())
// console.log('-------------removeIndexFromEnd------------')
// LList.removeIndexFromEnd(1);
// LList.display();
console.log('-------------findMiddleNode------------')
LList.findMiddleNode();

const linkA = new LinkedList();
linkA.insert(1,'head');
linkA.insert(2,1);
linkA.insert(3,2);
linkA.insert(7,3);
const linkB = new LinkedList();
linkB.insert(4,'head');
linkB.insert(6,4);
linkB.insert(8,6);
linkB.insert(9,8);
console.log('-------------mergeSortedList------------')
let sortedList = mergeSortedList(linkA.head.next,linkB.head.next);
while (sortedList !== null) {
    console.log(sortedList.element)
    sortedList = sortedList.next
}