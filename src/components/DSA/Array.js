import React from "react";
import { useState } from "react";
import "./Common.css";
function Array() {
  const questions = [
    {
      id: 1,
      questionText: "A program P reads in 500 integers in the range [0..100] representing the scores of 500 students. It then prints the frequency of each score above 50. What would be the best way for P to store the frequencies?",
      options: ["An array of 50 numbers","An array of 100 numbers","An array of 500 numbers","A dynamically allocated array of 550 numbers"],
      explanation: "An array of 50 numbers is correct."
    },
    {
      id: 2,
      questionText: "The minimum number of comparisons required to determine if an integer appears more than n/2 times in a sorted array of n integers is",
      options:["O(n)","O(log n)", "O(n*log n)","O(1)"],
      explanation: `If you answered Theta(1), then think of examples {1, 2, 2, 2, 4, 4}, {1, 1, 2, 2, 2, 2, 3, 3} The Best way to find out whether an integer appears more than n/2 times in a sorted array(Ascending Order) of n integers, would be binary search approach.
      The First occurrence of an element can be found out in O(log(n)) time using divide and conquer technique,lets say it is i.
      The Last occurrence of an element can be found out in O(log(n)) time using divide and conquer technique,lets say it is j.
      Now number of occurrence of that element(count) is (j-i+1). Overall time complexity = log n +log n +1 = O(logn)`
    },
    {
      id: 3,
      questionText: `What will the output of the below code?\n
      (#include <iostream>
      using namespace std;
       
      int main()
      {
       
          int arr[2] = { 1, 2 };
          cout << 0 [arr] << ", " << 1 [arr] << endl;
          return 0;
      })`,
      options: ["1, 2","Syntax error","Run time error","None"],
      explanation: `0[arr]] is a different way to represent array element, which represents the first element of the array.
      similarly, 1[arr] is a different way to represent array element, which represents the second element of the array.
      
      Hence the correct output is (A)`,
    },
    {
      id: 4,
      questionText: `Let A be a square matrix of size n x n. Consider the following program. What is the expected output? 
      C = 100
for i = 1 to n do
    for j = 1 to n do
    {
        Temp = A[i][j] + C
        A[i][j] = A[j][i]
        A[j][i] = Temp - C
    } 
for i = 1 to n do
    for j = 1 to n do
        Output(A[i][j]);
`,
      options: ["The matrix A itself","Transpose of matrix A","Adding 100 to upper diagonal elements and subtracting 100 from diagonal elements of A","None of the above"],
      explanation: `If we take look at the inner statements of first loops, we can notice that the statements swap A[i][j] and A[j][i] for all i and j. Since the loop runs for all elements, every element A[l][m] would be swapped twice, once for i = l and j = m and then for i = m and j = l. Swapping twice means the matrix doesn’t change.`
    },
    {
      id: 5,
      questionText: "Consider an array consisting of –ve and +ve numbers. What would be the worst case time complexity of an algorithm to segregate the numbers having same sign altogether i.e all +ve on one side and then all -ve on the other ?",
      options: ["O(N)","O(N log N)","O(N*N)","O(N log log N)"],
      explanation: "Here we can use the partition algorithm of quick sort for segregation and answer will be O(N)."
    
    },
      {
        id: 6,
        questionText: "Let A[1...n] be an array of n distinct numbers. If i < j and A[i] > A[j], then the pair (i, j) is called an inversion of A. What is the expected number of inversions in any permutation on n elements ?",
        options: ["n(n-1)/2","n(n-1)/4","n(n+1)/4","2n[logn]"],
        explanation: "There are n(n-1)/2 pairs such that i < j. For a pair (ai, aj), probability of being inversion is 1/2. Therefore expected value of inversions = 1/2 * (n(n-1)/2) = n(n-1)/4."
      
      },
      {
        id: 7,
        questionText: "A three dimensional array in ‘C++’ is declared as int A[x][y][z]. Consider that array elements are stored in row major order and indexing begins from 0. Here, the address of an item at the location A[p][q][r] can be computed as follows (where w is the word length of an integer):",
        options: ["&A[0][0][0] + w(y * z * q + z * p + r)","&A[0][0][0] + w(y * z * p + z*q + r)","&A[0][0][0] + w(x * y * p + z * q+ r)","&A[0][0][0] + w(x * y * q + z * p + r)"],
        explanation: "According to above question we have to find the address of A[p][q][r] To reach pth row we must have to cross 0 to p-1 row i.e. p rows and each rows contains y∗z elements Hence , = y∗z∗p Now to reach qth element in pth row we have to cross q rows and each row contains z(total columns) elements =z∗q to reach rth elements we have to cross r elements in (p+1)th row Total elements to cross =(y∗z∗p+z∗q+r) Now each element occupies m amount of space in memory Therefore total space occupied by these elements = m(y∗z∗p+z∗q+r) Hence , address of A[p][q][r]=base address+ Space Occupied by the Elements Before it. =&A[0][0][0]+m(y*z*p+z*q+r) Hence Option (B) is correct."
      },
      {
        id: 8,
        questionText:"Consider a two dimensional array A[20][10]. Assume 4 words per memory cell, the base address of array A is 100, elements are stored in row-major order and first element is A[0][0]. What is the address of A[11][5] ?",
        options: ["560", "460", "570", "575"],
        explanation:"Element A[11][0] is stored at \"Base Address + 11 * 10 * 4\" which is \"Base Address + 440\" = 540. So A[11][5] is stored at 540 + 5*4 = 560."
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
        Array is a linear data structure with consecutive memory blocks. The
        array elements are easily accessed using indexing. There are many
        algorithms to search and sort elements in array data structure. Few
        important are - Linear search, Binary Search, Bubble sort, Insertion
        sort, Selection sort, Quick and Merge sorts, Count sort, radix sort
        algorithms etc.
      </h2>
      <img className="CourseImage" src="https://cdn.educba.com/academy/wp-content/uploads/2019/11/Arrays-in-data-structure.png" width="700px" height="20%"alt="" />
      <h3>
        * Below some important questions are provided for study reference...
      </h3>
      <h2>Q. Define bubble sort</h2>
      <p>
        Bubble sort is a simple sorting algorithm that works by repeatedly
        stepping through the list to be sorted, comparing each pair of adjacent
        items and swapping them if they are in the wrong order. The pass through
        the list is repeated until no swaps are needed, which indicates that the
        list is sorted. The algorithm gets its name from the way smaller
        elements "bubble" to the top of the list
      </p>
      <h2>Q. How the insertion sort is done with the array?</h2>
      <p>
        It sorts a list of elements by inserting each successive element in the
        previously sorted sublist. Consider an array to be sorted
        A[1],A[2],….A[n] a. Pass 1 : A[2] is compared with A[1] and placed them
        in sorted order. b. Pass 2 : A[3] is compared with both A[1] and A[2]
        and inserted at an appropriate place. This makes A[1], A[2],A[3] as a
        sorted sub array. c. Pass n-1 : A[n] is compared with each element in
        the sub array A[1],A[2],……A[n-1] and inserted at an appropriate
        position.
      </p>
      <h2>Q. What are the steps for selection sort?</h2>
      <ul>
        <li>The algorithm divides the input list into two parts: the sublist of items 
already sorted, which is built up from left to right at the front (left) of the 
list, and the sublist of items remaining to be sorted that occupy the rest of 
the list.</li>
<li>Initially, the sorted sublist is empty and the unsorted sublist is the entire input
list.</li>
<li>The algorithm proceeds by finding the smallest (or largest, depending on
sorting order) element in the unsorted sublist, exchanging it with the leftmost 
unsorted element (putting it in sorted order), and moving the sublist 
boundaries one element to the right.</li>
      </ul>
      <h2>Q. What is meant by shell sort?</h2>
      <p>Shell sort, also known as Shell sort or Shell's method, is an in-place comparison 
sort. It can either be seen as a generalization of sorting by exchange (bubble sort) or 
sorting by insertion (insertion sort).[1] The method starts by sorting elements far apart 
from each other and progressively reducing the gap between them. Starting with far 
apart elements can move some out-of-place elements into position faster than a simple 
nearest neighbor exchange. Donald Shell published the first version of this sort in 
1959. The running time of Shell sort is heavily dependent on the gap sequence it uses.</p>
<h2>Q. What are the steps in quick sort?</h2>
<h3>The steps are:</h3>
<ol type="a">
<li>Pick an element, called a pivot, from the list.</li>
<li>Reorder the list so that all elements with values less than the pivot come before 
the pivot, while all elements with values greater than the pivot come after it
(equal values can go either way). After this partitioning, the pivot is in its final 
position. This is called the partition operation.</li>
<li>Recursively apply the above steps to the sub-list of elements with smaller
values and separately to the sub-list of elements with greater values.</li>
</ol>
<h2>Q. Define radix sort</h2>
<p>Radix Sort is a clever and intuitive little sorting algorithm. Radix sort is a noncomparative integer sorting algorithm that sorts data with integer keys by grouping 
keys by the individual digits which share the same significant position and value. 
Radix Sort puts the elements in order by comparing the digits in 1's,10th and 100th place.</p>
<h2>Q. What is meant by linear search?</h2>
<p>Linear search or sequential search is a method for finding a particular value in a 
list that consists of checking every one of its elements, one at a time and in 
sequence, until the desired one is found.</p>
<h2>Q. What is binary search?</h2>
<p>For binary search, the array should be arranged in ascending or descending order.
In each step, the algorithm compares the search key value with the middle element of 
the array. If the key match, then a matching element has been found and its index, or 
position, is returned.</p>
<p>Otherwise, if the search key is less than the middle element, then the algorithm repeats 
its action on the sub-array to the left of the middle element or, if the search key is 
greater, on the sub-array to the right.</p>
<br></br>
      <p>
        * It's time for a quick revision of your knowledge on array data
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

export default Array;
