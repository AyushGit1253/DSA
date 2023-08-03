class node{
    constructor(a){
        this.value=a
        this.next=undefined
    }
}


insert_first=function(head,value){

   new_node=new node(value)
   new_node.next=head
   return new_node
}

insert_end=function(head,value){
    new_node=new node(value)
    temp=head
    while(temp.next!=null){
        temp=temp.next
    }
    temp.next=new_node
}

insert_middle=function(head,n,value){
    new_node=new node(value)
    temp=head
    while(n-1>0){
        temp=temp.next
        n=n-1
    }
    x=temp.next
    temp.next=new_node
    new_node.next=x
}

delete_end=function(head){
    temp=head
    while(temp.next!=null&&temp.next.next!=null){
        temp=temp.next
    }
    temp.next=undefined
}
delete_middle=function(head,n){
    temp=head
    while(n-2!=0){
        temp=temp.next
        n=n-1
    }
    temp.next=temp.next.next
}

display=function(head){
    temp=head
    while(temp!=null){
        console.log(temp.value)
        temp=temp.next
    } 
}
head=new node(5)
head=insert_first(head,10)
head=insert_first(head,1)
insert_end(head,30)
insert_middle(head,3,100)
head=head.next//delete starting node
delete_end(head)
delete_middle(head,3)
display(head)