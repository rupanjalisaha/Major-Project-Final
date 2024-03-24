import React from "react";
import { useState } from "react";
import "./Common.css";
function Stack() {
  const questions =[
    {
      id: 1,
      questionText:"The postfix form of the expression (A+ B)*(C*D- E)*F / G is?", 
      options:["AB+ CD*E – FG /**","AB + CD* E – F **G /","AB + CD* E – *F *G /","AB + CDE * – * F *G /"],
      explanation: `(((A+ B)*(C*D- E)*F) / G) is converted to postfix expression as
      (AB+(*(C*D- E)*F )/ G)
      (AB+CD*E-*F) / G
      (AB+CD*E-*F * G/). Thus Postfix expression is (c) AB+CD*E-*F*G/
      `,
    },
    {
      id: 2,
      questionText:"The data structure required to check whether an expression contains a balanced parenthesis is?", 
      options:["Stack","Queue","Array","Tree"],
      explanation: "The stack is a simple data structure in which elements are added and removed based on the LIFO principle. Open parenthesis is pushed into the stack and a closed parenthesis pops out elements till the top element of the stack is its corresponding open parenthesis. If the stack is empty, parenthesis is balanced otherwise it is unbalanced.",
    },
    {
      id: 3,
      questionText:"What data structure would you most likely see in non recursive implementation of a recursive algorithm?", 
      options:["Linked List", "Stack", "Queue", "Tree"],
      explanation: "In recursive algorithms, the order in which the recursive process comes back is the reverse of the order in which it goes forward during execution. The compiler uses the stack data structure to implement recursion. In the forwarding phase, the values of local variables, parameters and the return address are pushed into the stack at each recursion level. In the backing-out phase, the stacked address is popped and used to execute the rest of the code.",
    },
    {
      id: 4,
      questionText:"The postfix form of A*B+C/D is?", 
      options:["*AB/CD+", "AB*CD/+","A*BC+/D","ABCD+/*"],
      explanation: `Infix expression is (A*B)+(C/D)
      AB*+(C/D)
      AB*CD/+. Thus postfix expression is AB*CD/+`,
    },
    {
      id: 5,
      questionText:"The prefix form of A-B/ (C * D ^ E) is?", 
      options:["-/*^ACBDE","-ABCD*^DE","-A/B*C^DE","-A/BC*^DE"],
      explanation: ` Infix Expression is (A-B)/(C*D^E)
      (-A/B)(C*D^E)
      -A/B*C^DE. Thus prefix expression is -A/B*C^DE.`,
    },
    {
      id: 6,
      questionText:"What is the result of the following operation? Top (Push (S, X))", 
      options:["X","X+S","S","XS"],
      explanation: "The function Push(S,X) pushes the value X in the stack S. Top() function gives the value which entered last. X entered into stack S at last.",
    },
    {
      id: 7,
      questionText:`The prefix form of an infix expression (p + q) – (r * t) is?`, 
      options:[`+ pq – *rt`,`– +pqr * t`,`– +pq * rt`,`– + * pqrt`],
      explanation: `Given Infix Expression is ((p+q)-(r*t))
      (+pq)-(r*t)
      (-+pq)(r*t)
      -+pq*rt. Thus prefix expression is -+pq*rt.`,
    },
    {
      id: 8,
      questionText:"Which data structure is used for implementing recursion?", 
      options:["Queue","Stack","Array","List"],
      explanation: "Stack is used",
    },
    
  ]
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (questionId, value) => {
    setSelectedOption({questionId, value });
  };
  return (
    <div>
      <div className="body">
      <h2>
        Stack is a linear data structure that follows LIFO(Last In First Out)
        mechanism to store, access and retrieve data. It is used in DFS(Depth
        First Search) algorithm of graph. Pop, push, top/peek, isFull and
        isEmpty operations can be performed on stack.
      </h2>
      <img className="CourseImage" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Stack%20Article%20-%20Soni/working-of-stack.png" width="700px" height="15%"alt="" />
      <h3>* Below some important question answers are given for study...</h3>
      <h2>Q. List the applications of stacks</h2>
      <ul>
        <li>Towers of Hanoi</li>
        <li>Reversing a string</li>
        <li>Balanced parenthesis</li>
        <li>Recursion using stack</li>
        <li>Evaluation of arithmetic expressions</li>
      </ul>
      <h2>
        Q. Mention the advantages of representing stacks using linked lists than
        arrays.
      </h2>
      <ul>
        <li>
          It is not necessary to specify the number of elements to be stored in
          a stack during its declaration, since memory is allocated dynamically
          at run time when an element is added to the stack
        </li>
        <li> Insertions and deletions can be handled easily and efficiently</li>
        <li>
          Linked list representation of stacks can grow and shrink in size
          without wasting memory space, depending upon the insertion and
          deletion that occurs in the list
        </li>
        <li>
          Multiple stacks can be represented efficiently using a chain for each
          stack
        </li>
      </ul>
      <br></br>
      <p>
        * It's time for a quick revision of your knowledge on stack data
        structure. Click on the answer box to see the correct answer of the
        questions.
      </p>
      <div className="PracticeSection">
        <h1>Practice Section</h1>
        <hr></hr>
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
  );
}

export default Stack;
