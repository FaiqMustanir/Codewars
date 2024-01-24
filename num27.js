function countGrade(scores) {
    // Define the grading rules
    const gradingRules = {
      S: score => score === 100,
      A: score => score < 100 && score >= 90,
      B: score => score < 90 && score >= 80,
      C: score => score < 80 && score >= 60,
      D: score => score < 60 && score >= 0,
      X: score => score === -1,
    };
  
    // Initialize the result object
    const result = {
      S: 0,
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      X: 0,
    };
  
    // Count the grades
    scores.forEach(score => {
      for (const grade in gradingRules) {
        if (gradingRules[grade](score)) {
          result[grade]++;
          break;
        }
      }
    });
  
    return result;
  }
  
  // Examples
  console.log(countGrade([50, 60, 70, 80, 90, 100]));
  // Output: { S: 1, A: 1, B: 1, C: 2, D: 1, X: 0 }
  
  console.log(countGrade([65, 75, 85, 85, 95, 100, 100]));
  // Output: { S: 2, A: 1, B: 2, C: 2, D: 0, X: 0 }
  
  console.log(countGrade([-1, -1, -1, -1, -1, -1]));
  // Output: { S: 0, A: 0, B: 0, C: 0, D: 0, X: 6 }
  