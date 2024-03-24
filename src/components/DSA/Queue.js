import React from "react";
import { useState } from "react";
import "./Common.css";
function Queue() {
  const questions =[
    {
      id: 1,
      questionText: `Following is C like pseudo-code of a function that takes a Queue as an argument, and uses a stack S to do processing.void fun(Queue *Q)
      {
          Stack S;  // Say it creates an empty stack S
       
          // Run while Q is not empty
          while (!isEmpty(Q))
          {
              // deQueue an item from Q and push the dequeued item to S
              push(&S, deQueue(Q));
          }
       
          // Run while Stack S is not empty
          while (!isEmpty(&S))
          {
            // Pop an item from S and enqueue the popped item to Q
            enQueue(Q, pop(&S));
          }
      }`,
      options:["Removes the last from Q", "Keeps the Q same as it was before the call","Makes Q empty","Reverses the Q"],
      explanation:"The function takes a queue Q as an argument. It dequeues all items of Q and pushes them to a stack S. Then pops all items of S and enqueues the items back to Q. Since the stack is LIFO order, all items of the queue are reversed. Hence option (D) is the correct answer."
    },
    {
      id:2, 
      questionText:"Which one of the following is an application of Queue Data Structure?",
      options:["When a resource is shared among multiple consumers","When data is transferred asynchronously (data not necessarily received at same rate as sent) between two processes","Load Balancing","All of the above"],
      explanation:`(A) When a resource is shared among multiple consumers: In scenarios where a resource (such as a printer, CPU time, or database connection) needs to be shared among multiple consumers or processes, a queue data structure can be used. Each consumer can enqueue their requests for the resource, and the resource can be allocated to them in the order of their requests by dequeuing from the queue. This ensures fair access to the shared resource and prevents conflicts or resource contention.

      (B) When data is transferred asynchronously between two processes: When data is transferred asynchronously between two processes or systems, a queue can be used as a buffer or intermediary storage. One process enqueues the data to be sent, while the other process dequeues and processes the received data. The queue allows for decoupling the rate of data production from data consumption, ensuring smooth and efficient communication between the processes.
      
      (C) Load Balancing: Load balancing is the practice of distributing workloads across multiple resources to optimize performance and utilization. A queue data structure can be used in load-balancing algorithms to manage incoming requests or tasks. The requests are enqueued in the queue, and the load balancer can dequeue and assign them to available resources based on various criteria (e.g., round-robin, least connections). This helps distribute the workload evenly across the resources, preventing overload and maximizing throughput.
      
      Hence (D) is the correct option.`,
    },
    {
      id:3, 
      questionText:"How many stacks are needed to implement a queue. Consider the situation where no other data structure like arrays, linked list is available to you.",
      options:["1","2","3","4"],
      explanation:`A queue can be implemented using two stacks. Hence Option(B) is the correct answer.`,
    },
    {
      id:4, 
      questionText:`Which of the following operations on a queue data structure has a time complexity of O(1)? A) Enqueue 
      B) Dequeue , C) Peek , D) Clear
      `,
      options:["A and B","B only","C only","A and D"],
      explanation:"In a queue data structure, dequeueing (removing an element from the front of the queue) typically has a time complexity of O(1) because it involves removing the first element and adjusting the front pointer. Hence, Option B is the correct option.",
    },
    {
      id:5, 
      questionText:"Suppose a circular queue of capacity (n – 1) elements is implemented with an array of n elements. Assume that the insertion and deletion operation are carried out using REAR and FRONT as array index variables, respectively. Initially, REAR = FRONT = 0. The conditions to detect queue full and queue empty are",
      options:["Full: (REAR+1) mod n == FRONT, empty: REAR == FRONT", "Full: (REAR+1) mod n == FRONT, empty: (FRONT+1) mod n == REAR","Full: REAR == FRONT, empty: (REAR+1) mod n == FRONT","Full: (FRONT+1) mod n == REAR, empty: REAR == FRONT"],
      explanation:`When Queue Full :
      ( REAR+1)%n = (4+1)%5 = 0
      FRONT is also 0. Hence ( REAR + 1 ) %n is equal to FRONT.
      
      When Queue Empty :
      
      REAR was equal to FRONT when empty ( because in the starting before filling the queue FRONT = REAR = 0 )
      
      Hence Option A is correct.`,
    },
    {
      id: 6,
      questionText:`An implementation of a queue Q, using two stacks S1 and S2, is given below: 

      void insert(Q, x) {
        push (S1, x);
     }
       
     void delete(Q){
        if(stack-empty(S2)) then 
           if(stack-empty(S1)) then {
               print(“Q is empty”);
               return;
           }
           else while (!(stack-empty(S1))){
               x=pop(S1);
               push(S2,x);
           }
        x=pop(S2);
     }      Let n insert and m (<=n) delete operations be performed in an arbitrary order on an empty queue Q. Let x and y be the number of push and pop operations performed respectively in the process. Which one of the following is true for all m and n?     `,
      options:["n+m <= x < 2n and 2m <= y <= n+m","n+m <= x < 2n and 2m<= y <= 2n","2m <= x < 2n and 2m <= y <= n+m","2m <= x <2n and 2m <= y <= 2n"],
      explanation:"The order in which insert and delete operations are performed matters here. The best case: Insert and delete operations are performed alternatively. In every delete operation, 2 pop and 1 push operations are performed. So, total m+ n push (n push for insert() and m push for delete()) operations and 2m pop operations are performed. The worst case: First n elements are inserted and then m elements are deleted. In first delete operation, n + 1 pop operations and n push operation are performed. Other than first, in all delete operations, 1 pop operation is performed. So, total m + n pop operations and 2n push operations are performed (n push for insert() and n push for delete())Hence Option (A) is the correct answer.",
    },
    {
      id:7,
      questionText:"Suppose a stack implementation supports an instruction REVERSE, which reverses the order of elements on the stack, in addition to the PUSH and POP instructions. Which one of the following statements is TRUE with respect to this modified stack?",
      options:["A queue cannot be implemented using this stack.","A queue can be implemented where ENQUEUE takes a single instruction and DEQUEUE takes a sequence of two instructions.","A queue can be implemented where ENQUEUE takes a sequence of three instructions and DEQUEUE takes a single instruction.","A queue can be implemented where both ENQUEUE and DEQUEUE take a single instruction each."],
      explanation:"To DEQUEUE an item, simply POP. To ENQUEUE an item, we can do following 3 operations 1) REVERSE 2) PUSH 3) REVERSE. Hence Option (C) is the correct answer.",
    },
    {
      id:8,
      questionText:`A Priority-Queue is implemented as a Max-Heap. Initially, it has 5 elements. The level-order traversal of the heap is given below: 10, 8, 5, 3, 2 Two new elements ”1‘ and ”7‘ are inserted in the heap in that order. The level-order traversal of the heap after the insertion of the elements is:

      `,
      options:["10, 8, 7, 5, 3, 2, 1","10, 8, 7, 2, 3, 1, 5","10, 8, 7, 1, 2, 3, 5","10, 8, 7, 3, 2, 1, 5"],
      explanation:"The output will be 10, 8,  7, 3, 2, 1, 5. Hence Option(D) is the correct answer.",
    }
  ]
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (questionId, value) => {
    setSelectedOption({questionId, value });
  };
  return (
    <div>
      <div className="body">
      <h2>
        Queue is a linear data structure that follows FIFO(First In First Out)
        mechanism to store, access and retrieve data. It is used in BFS(Breadth
        First Search) algorithm of graph. Pop, push, top/peek, isFull and
        isEmpty operations can be performed on stack. Dequeue(Double ended
        queue) is another type of queue where elements can be inserted from the
        front side as well as back side using push_back and pop_back.
      </h2>
      <img className="CourseImage" src="https://media.geeksforgeeks.org/wp-content/uploads/20220805131014/fifo.png" width="700px" height="20%"alt="" />
      <h3>* Below some important question answers are given for study...</h3>
      <h2>Q. Define a priority queue</h2>
      <p>
        Priority queue is a collection of elements, each containing a key
        referred as the priority for that element. Elements can be inserted in
        any order (i.e., of alternating priority), but are arranged in order of
        their priority value in the queue. The elements are deleted from the
        queue in the order of their priority (i.e., the elements with the
        highest priority is deleted first). The elements with the same priority
        are given equal importance and processed accordingly.
      </p>
      <h2>Q. State the difference between queues and linked lists.</h2>
      <p>
        The difference between queues and linked lists is that insertions and
        deletions may occur anywhere in the linked list, but in queues
        insertions can be made only in the rear end and deletions can be made
        only in the front end.
      </p>
      <h2>Q. Define a Deque.</h2>
      <p>
        Deque (Double-Ended Queue) is another form of a queue in which
        insertions and deletions are made at both the front and rear ends of the
        queue. There are two variations of a deque, namely, input restricted
        deque and output restricted deque. The input restricted deque allows
        insertion at one end (it can be either front or rear) only. The output
        restricted deque allows deletion at one end (it can be either front or
        rear)
      </p>
      <h2>Q. What is the need for Priority queue?</h2>
      <p>
        In a multiuser environment, the operating system scheduler must decide
        which of the several processes to run only for a fixed period of time.
        One algorithm uses queue. Jobs are initially placed at the end of the
        queue. The scheduler will repeatedly take the first job on the queue,
        run it until either it finishes or its time limit is up and place it at
        the end of the queue if it does not finish. This strategy is not
        appropriate, because very short jobs will soon to take a long time
        because of the wait involved in the run.
      </p>
      <p>
        Generally, it is important that short jobs finish as fast as possible,
        so these jobs should have precedence over jobs that have already been
        running. Further more, some jobs that are not short are still very
        important and should have precedence. This particular application seems
        to require a special kind of queue, known as priority queue. Priority
        queue is also called as Heap or Binary Heap
      </p>
      <p>
        * It's time for a quick revision of your knowledge on queue data
        structure. Click on the answer box to see the correct answer of the
        questions.
      </p>
        <br></br>
      <div className="PracticeSection">
        <h1>Practice Section</h1>
        <hr></hr>
        <div>
        {questions.map((question) => (
                <div key={question.id} className="question">
                  <p>{question.id}. {question.questionText}</p>
                  Options:
                  <ol style={{marginTop:"5px", marginLeft:"50px"}}>
                    {question.options.map((option, index) => (
                      <li key={index}>
                        <label>
                          <input
                            type="radio"
                            value={option}
                            checked={
                              selectedOption &&
                              selectedOption.questionId === question.id &&
                              selectedOption.value === option
                            }
                            onChange={() =>
                              handleOptionChange(
                                question.id,
                                option
                              )
                            }
                          />
                          {option}
                        </label>
                      </li>
                    ))}
                  </ol>
                  {selectedOption &&
                    selectedOption.questionId === question.id && (
                      <div className="explanation">
                        <p>Explanation: {question.explanation}</p>
                      </div>
                    )}
                </div>
              ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Queue;
