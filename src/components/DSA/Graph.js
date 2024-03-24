import React from "react";
import { useState } from "react";
import "./Common.css";
function Graph() {
  const questions =[
    {
      id:1,
      questionText:"Which of the following statements for a simple graph is correct?",
      options:["Every path is a trail","Every trail is a path","Every trail is a path as well as every path is a trail","Path and trail have no relation"],
      explanation:"In a walk if the vertices are distinct it is called a path, whereas if the edges are distinct it is called a trail.",
    },
    {
      id:2,
      questionText:"What is the number of edges present in a complete graph having n vertices?",
      options:["(n*(n+1))/2","(n*(n-1))/2","n","Information given is insufficient"],
      explanation:"Number of ways in which every vertex can be connected to each other is nC2. So (b) is the correct option.",
    },
    {
      id:3,
      questionText:"In a simple graph, the number of edges is equal to twice the sum of the degrees of the vertices.",
      options:["True", "False"],
      explanation:"The sum of the degrees of the vertices is equal to twice the number of edges (not degrees).",
    },
    {
      id:4,
      questionText:"A connected planar graph having 6 vertices, 7 edges contains _____________ regions.",
      options:["15","3","1","11"],
      explanation:`By euler’s formula the relation between vertices(n), edges(q) and regions(r) is given by n-q+r=2. So here the correct option is (b).`,
    },
    {
      id:5,
      questionText:"If a simple graph G, contains n vertices and m edges, the number of edges in the Graph G'(Complement of G) is ___________",
      options:["(n*n-n-2*m)/2","(n*n+n+2*m)/2","(n*n-n-2*m)/2","(n*n-n+2*m)/2"],
      explanation:`The union of G and G’ would be a complete graph so, the number of edges in G’= number of edges in the complete form of G(nC2)-edges in G(m).`,
    },
    {
      id:6,
      questionText:"What is the maximum number of edges in a bipartite graph having 10 vertices?",
      options:["24","21","25","16"],
      explanation:"Let one set have n vertices another set would contain 10-n vertices. Total number of edges would be n*(10-n), differentiating with respect to n, would yield the answer.",
    },
    {
      id:7,
      questionText:"Which of the following ways can be used to represent a graph?",
      options:["Adjacency List and Adjacency Matrix","Incidence Matrix","Adjacency List, Adjacency Matrix as well as Incidence Matrix","No way to represent"],
      explanation:"Adjacency Matrix, Adjacency List and Incidence Matrix are used to represent a graph.",
    },
    {
      id:8,
      questionText:"For which of the following combinations of the degrees of vertices would the connected graph be eulerian?",
      options:["1,2,3","2,3,4","2,4,5","1,3,5"],
      explanation:"",
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
        Graph is a non linear data structure formed with nodes that are
        connected with each other and the root node by edges. BFS(Breadth First
        Search) and DFS(Depth First Search) are the searching algorithms to find
        an element in a Graph. It is used in database management system for data
        fetching purpose.
      </h2>
      <img className="CourseImage" src="https://d14b9ctw0m6fid.cloudfront.net/ugblog/wp-content/uploads/2020/10/4.png" width="700px" height="15%"alt="" />
      <h3>* Below some important question answers are given for study...</h3>
      <h2>Q. Define adjacent nodes.</h2>
      <p>
        Any two nodes which are connected by an edge in a graph are called
        adjacent nodes. For example, if an edge x ε E is associated with a pair
        of nodes (u,v) where u, v ε V, then we say that the edge x connects the
        nodes u and v.
      </p>
      <h2>Q. What is a directed graph?</h2>
      <p>A graph in which every edge is directed is called a directed graph.</p>
      <h2>Q. What is an undirected graph?</h2>
      <p>
        A graph in which every edge is undirected is called a directed graph.
      </p>
      <h2>Q. What is a loop?</h2>
      <p>
        An edge of a graph which connects to itself is called a loop or sling.
      </p>
      <h2>Q. What is a simple graph?</h2>
      <p>
        A simple graph is a graph, which has not more than one edge between a
        pair of nodes than such a graph is called a simple graph.
      </p>
      <h2>Q. What is a weighted graph?</h2>
      <p>
        A graph in which weights are assigned to every edge is called a weighted
        graph.
      </p>
      <h2>Q. Define outdegree of a graph.</h2>
      <p>
        In a directed graph, for any node v, the number of edges which have v as
        their initial node is called the out degree of the node v.
      </p>
      <h2>Q. Define indegree of a graph?</h2>
      <p>
        In a directed graph, for any node v, the number of edges which have v as
        their terminal node is called the indegree of the node v.
      </p>
      <h2>Q. What is a cycle or a circuit?</h2>
      <p>
        A path which originates and ends in the same node is called a cycle or
        circuit.
      </p>
      <h2>Q. What is an acyclic graph?</h2>
      <p>
        A simple diagram which does not have any cycles is called an acyclic
        graph.
      </p>
      <h2>Q. What is an undirected acyclic graph?</h2>
      <p>
        When every edge in an acyclic graph is undirected, it is called an
        undirected acyclic graph. It is also called as undirected forest.
      </p>
      <h2>Q. Define graph traversals.</h2>
      <p>
        Traversing a graph is an efficient way to visit each vertex and edge
        exactly once.
      </p>
      <p>
        * It's time for a quick revision of your knowledge on graph data
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

export default Graph;
