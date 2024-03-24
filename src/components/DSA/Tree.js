import React from "react";
import { useState } from "react";
import "./Common.css";
function Tree() {
  const questions = [
    {
      id:1,
      questionText:"Which algorithm is used in the top tree data structure?",
      options:["Divide and Conquer","Greedy","Backtracking","Branch"],
      explanation:"Top tree is a type of data structure which is based on unrooted dynamic binary tree and is used to solve path related problems. It allows an algorithm called divide and conquer.",
    },
    {
      id:2,
      questionText:"For how many vertices in a set, is top tree defined for underlying tree?",
      options:["3","4","5","2"],
      explanation:"Top tree is defined for a set having a maximum of 2 vertices for its underlying tree. Those sets having at maximum 2 vertices is called External Boundary Vertices.",
    },
    {
      id:3,
      questionText:"How many edges are present in path cluster?",
      options:["2","3","6","1"],
      explanation:"There are at least 2 edges present in path cluster. Cluster in data structure is defined as the subtree that is connect having maximum of 2 vertices known as Boundary Vertices.",
    },
    {
      id:4,
      questionText:"How many edges does a leaf cluster contain?",
      options:["0","1","2","3"],
      explanation:"If a cluster has no edges and contains only one vertex known as boundary vertex then, it is known as leaf cluster. So a leaf cluster doesn’t contain any edges. It is also known as Point cluster.",
    },
    {
      id:5,
      questionText:"Which data structure is used to maintain a dynamic forest using a link or cut operation?",
      options:["Top Tree", "Array","Linked List","Stack"],
      explanation:"Top tree data structure is used to maintain a dynamic forest using link or cut operations. Top tree is a type of data structure which is based on unrooted dynamic binary tree and is used to solve path related problems.",
    },
    {
      id:6,
      questionText:"If A ꓵ B (A and B are two clusters) is a singleton set then it is a Merge able cluster.",
      options:["True","False"],
      explanation:"If A ꓵ B is a singleton set where A and B are two clusters, that is there are only one node that is common between the clusters then they are known as Merge able cluster.",
    },
    {
      id:7,
      questionText:"How many top trees are there in a tree with single vertex?",
      options:["0","1","2","3"],
      explanation:"Tree having a single vertex has no clusters of tree present in the structure. Therefore, there are empty top trees in a tree having a single vertex. Trees with one node are single node.",
    },
    {
      id:8,
      questionText:"Which property makes top tree a binary tree?",
      options:["Nodes as Cluster","Leaves as Edges","Root is Tree Itself","All of the mentioned"],
      explanation:"Top tree can be considered as a binary tree if the nodes form a cluster, leaves act as an edge and the root of the top tree acts as a tree itself. Then the top tree is called binary tree.",
    },
    {
      id:9,
      questionText:"What is the time complexity for maintaining a dynamic set of weighted trees?",
      options:["O(n)","O(n*n)","O(log n)","O(n!)"],
      explanation:"A lot of applications have been implemented using Top tree interface. Maintaining a dynamic set of weighted trees is one such application which can be implemented with O (log n) time complexity."
    },
    {
      id:10,
      questionText:"Which of the following are used as an internal operation in Top tree?",
      options:["Merge","Cut","Expose","Link"],
      explanation:"Link returns a single tree having different vertices from top trees. Cut removes the edge from the top tree. Expose is used to implement queries on top trees. While merge is an internal operation used to merge two clusters and return as a parent cluster."
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
        Tree is a non-linear data structure with children nodes connected with
        parent nodes. The first node of a tree is called "root node". Each node
        can have maximum 2 nodes. A node having no child node is called "leaf
        node".
      </h2>
      <h3>Trees are of many types:</h3>
      <ul>
        <li>Binary Search Tree</li>
        <li>AVL Tree(Balanced Tree)</li>
        <li>Trie Tree</li>
        <li>B+ Tree</li>
        <li>B- Tree</li>
        <li>T Trees</li>
        <li>Heap Tree</li>
      </ul>
      <img className="CourseImage" src="https://miro.medium.com/v2/resize:fit:975/1*PWJiwTxRdQy8A_Y0hAv5Eg.png" width="800px" height="15%"alt="" />
      <h3>* Below some important question answers are given for study...</h3>
      <h2>Q. Define forest.</h2>
      <p>
        A tree may be defined as a forest in which only a single node (root) has
        no predecessors. Any forest consists of a collection of trees.
      </p>
      <h2>Q. State the properties of a binary tree</h2>
      <ul>
        <li>
          The maximum number of nodes on level n of a binary tree is 2n-1, where
          n≥1.
        </li>
        <li>
          The maximum number of nodes in a binary tree of height n is 2n-1,
          where n≥1.
        </li>
        <li>
          For any non-empty tree, nl=nd+1 where nl is the number of leaf nodes
          and nd is the number of nodes of degree 2.
        </li>
      </ul>
      <h2>Q. State the merits of linear representation of binary trees.</h2>
      <ul>
        <li>Storage method is easy and can be easily implemented in arrays</li>
        <li>
          When the location of a parent/child node is known, other one can be
          determined easily
        </li>
        <li>
          It requires static memory allocation so it is easily implemented in
          all programming language
        </li>
      </ul>
      <h2>Q. State the demerit of linear representation of binary trees.</h2>
      <p>
        Insertions and deletions in a node take an excessive amount of
        processing time due to data movement up and down the array
      </p>
      <h2>Q. State the merit of linked representation of binary trees.</h2>
      <p>
        Insertions and deletions in a node involve no data movement except the
        rearrangement of pointers, hence less processing time.
      </p>
      <h2>Q. What is the use of threaded binary tree?</h2>
      <p>
        In threaded binary tree, the NULL pointers are replaced by some
        addresses. The left pointer of the node points to its predecessor and
        the right pointer of the node points to its successor.
      </p>
      <h2>Q. Define AVL Tree.</h2>
      <p>
        An empty tree is height balanced. If T is a non-empty binary tree with
        TL and TR as its left and right subtrees, then T is height balanced if
        (i) TL and TR are height balanced and (ii) │hL - hR│≤ 1 Where hL and hR
        are the heights of TL and TR respectively.
      </p>
      <h2>Q. What do you mean by balanced trees?</h2>
      <p>
        Balanced trees have the structure of binary trees and obey binary search
        tree properties. Apart from these properties, they have some special
        constraints, which differ from one data structure to another. However,
        these constraints are aimed only at reducing the height of the tree,
        because this factor determines the time complexity. Eg: AVL trees, Splay
        trees.
      </p>
      <h2>Q. What are the categories of AVL rotations?</h2>
      <p>
        Let A be the nearest ancestor of the newly inserted nod which has the
        balancing factor ±2. Then the rotations can be classified into the
        following four categories: Left-Left: The newly inserted node is in the
        left subtree of the left child of A. Right-Right: The newly inserted
        node is in the right subtree of the right child of A. Left-Right: The
        newly inserted node is in the right subtree of the left child of A.
        Right-Left: The newly inserted node is in the left subtree of the right
        child of A.
      </p>
      <h2>Q. What do you mean by balance factor of a node in AVL tree?</h2>
      <p>
        The height of left subtree minus height of right subtree is called
        balance factor of a node in AVL tree.The balance factor may be either 0
        or +1 or -1.The height of an empty tree is -1.
      </p>
      <h2>Q. Define splay tree.</h2>
      <p>
        A splay tree is a binary search tree in which restructuring is done
        using a scheme called splay. The splay is a heuristic method which moves
        a given vertex v to the root of the splay tree using a sequence of
        rotations.
      </p>
      <h2>Q. What is the idea behind splaying?</h2>
      <p>
        Splaying reduces the total accessing time if the most frequently
        accessed node is moved towards the root. It does not require to maintain
        any information regarding the height or balance factor and hence saves
        space and simplifies the code to some extent.
      </p>
      <br></br>
      <p>
        * It's time for a quick revision of your knowledge on tree data
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

export default Tree;
