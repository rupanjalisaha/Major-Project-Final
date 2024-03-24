import React from "react";
import { useState } from "react";
import "./Common.css";
function LinkedList() {
  const questions=[
    {
      id:1,
      questionText:"What is the time complexity of searching for an element in a linked list?",
      options:["O(1)","O(log n)","O(n)","O(n*n)"],
      explanation:"O(n) is correct option.",
    },
    {
      id:2,
      questionText:"Which of the following information is stored in a doubly-linked list’s nodes?",
      options:["Value of node","Address of next node","Address of the previous node","All of the above"],
      explanation:"A doubly linked list stores information about the value, and addresses of previous and next nodes.",
    },
    {
      id:3,
      questionText:`What will be the output of the following code snippet for the list 1->2->3->4->5->6?
      void solve(struct node* start)
{
if(start == NULL)
return;
printf("%d ", start->data);
if(start->next != NULL )
solve(start->next->next);
printf("%d ", start->data);
}
`,
      options:["1 2 3 4 5 6","1 3 5 5 3 1","1 3 5 1 3 5","2 4 6 1 3 5"],
      explanation:"The solve() function prints alternative nodes of the list from start to end and then from end to start. If the list length is even, then the last node is ignored.",
    },
    {
      id:4,
      questionText:"Insertion of an element at the middle of a linked list requires the modification of how many pointers?",
      options:["2","1","3","4"],
      explanation:"2 pointers are needed to be modified for insertion in the middle of a linked list, the node before the node to be inserted and the node which is being inserted.",
    },
    {
      id:5,
      questionText:"Which of the following algorithms is not feasible to implement in a linked list?",
      options:["Linear Search","Merge Sort","Insertion Sort","Binary Search"],
      explanation:"Binary search is not feasible to implement in a linked list since we cannot access an element at a random location directly from a linked list.",
    },
    {
      id:6,
      questionText:`What will be the value of “sum” after the following code snippet terminates?
      void solve(ListNode* root) {
        /*
        The LinkedList is defined as:
        root-> val = value of the node
        root-> next = address of next element from the node 
        The List is 1 -> 2 -> 3 -> 4 -> 5
        */
        int sum = 0;
        while (root != NULL) {
            sum += root -> val;
            root = root -> next;
        }
        cout << sum << endl;
    }`,
      options:["15","20","5","1"],
      explanation:"The code calculates the sum of values of the nodes of the given LinkedList, which is 15.",
    },
    {
      id:7,
      questionText:"A linked list node can be implemented using?",
      options:["Structs","Class","Both A and B","None of the above"],
      explanation:"Linked list nodes can be implemented using both structs and classes.",
    },
    {
      id:8,
      questionText:"Polynomial addition can be implemented using which of the following data structure?",
      options:["Linked List","Trees","Stacks","None of the above"],
      explanation:"Polynomial Addition can be implemented using linked lists",
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
        Linked list is a linear data structure while storing data but behaves
        like a non linear data structure while fetching data.
      </h2>
      <h3>
        Linked list is a sequence of nodes connected with each other. There are
        two fields in the linked list - one to store the data and another to
        store the address of the next node. The address stored in last node is
        set to be NULL and the first node is called "Head node".
      </h3>
      <img className="CourseImage" src="https://miro.medium.com/v2/resize:fit:1230/1*iMYmkYDCSrXXdwpbqm-ekA.jpeg" width="700px" height="15%"alt="" />
      <p>
        * It's time for a quick revision of your knowledge on linked-list data
        structure. Click on the answer box to see the correct answer of the
        questions.
      </p>
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

export default LinkedList;
