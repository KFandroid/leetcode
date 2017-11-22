
function ListNode(val){
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    var headNode = null;
    var num1 ,num2 ,sum ;
    var carryNum = 0;
    do{
        num1 = l1.val? l1.val: 0;
        num2 = l2.val? l2.val: 0;
        sum = num1 + num2 + carryNum;

        carryNum = sum >= 10? 1:0;
        if(headNode == null){
            headNode = new ListNode(sum%10);
        }else{
            headNode.next = new ListNode(sum%10);
            headNode = headNode.next;
        }

        if(l1.next != null ){
            l1 = l1.next;
        }
        if(l2.next != null){
            l2 = l2.next;
        }
    } while (l1.next != null || l2.next != null);

window.onload = function () {
    console.log(1);
   // var l1 = new ListNode(1);
   //  l1.next = new ListNode(2);
   //  var l2 = new ListNode(3);
   //  l2.next = new ListNode(4);
   //  var l3 = addTwoNumbers(l1,l2);
   //  console.log(l3);
}
};