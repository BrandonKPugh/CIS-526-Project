/** site.js 
 * You should add your JavaScript code to this file.  
 * See the assignment description in Guide for what
 * your code needs to accomplish.
 */

var headings = ["Identifier", "Standard", "Subconcept", "Practices"];

var body = document.body;

var gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
body.appendChild(gridContainer);

var headingContainer = document.createElement('div');
headingContainer.id = 'heading-container';
headingContainer.classList.add('row-container');

headings.forEach(function(heading){
  var newHeading = document.createElement('div');
  newHeading.id = heading;
  newHeading.classList.add('heading');
  newHeading.textContent = heading;
  headingContainer.appendChild(newHeading);
})

gridContainer.appendChild(headingContainer);

var i = 0;
standards.forEach(function(data){
  var newDiv = document.createElement('div');
  newDiv.classList.add('row-container');
  newDiv.id = 'row-' + i;
  
  var divIdentifier = document.createElement('div');
  divIdentifier.classList.add('identifier');
  divIdentifier.textContent = data.identifier;
  newDiv.appendChild(divIdentifier);
  
  
  var divStandard = document.createElement('div');
  // divStandard.id = 'div-' + i + '-standard';
  divStandard.classList.add('standard');
  
  var pStatement = document.createElement('p');
  pStatement.classList.add('statement');
  pStatement.textContent = data.statement;
  divStandard.appendChild(pStatement);
  
  var pDescription = document.createElement('p');
  pDescription.classList.add('description');
  pDescription.textContent = data.description;
  divStandard.appendChild(pDescription);
  
  newDiv.appendChild(divStandard);
  
  
  var divSubConcept = document.createElement('div');
  // divSubConcept.id = 'div-' + i + '-subconcept';
  divSubConcept.classList.add('subconcept');
  divSubConcept.textContent = data.subconcept;
  newDiv.appendChild(divSubConcept);
  
  var divPractices = document.createElement('div');
  // divPractices.id = 'div-' + i + '-practices';
  divPractices.classList.add('practices');
  divPractices.textContent = data.practices;
  newDiv.appendChild(divPractices);
  
  var divButtons = document.createElement('div');
  divButtons.classList.add('buttons');
  
  var buttonMore = document.createElement('button');
  buttonMore.classList.add('button-more');
  buttonMore.textContent = 'See More';
  buttonMore.dataset.row = i;
  divButtons.appendChild(buttonMore);
  
  var buttonLess = document.createElement('button');
  buttonLess.classList.add('button-less');
  buttonLess.textContent = 'See Less';
  buttonLess.dataset.row = i;
  divButtons.appendChild(buttonLess);
  
  newDiv.appendChild(divButtons);
  
  gridContainer.appendChild(newDiv);
  i++;
});

var moreButtons = document.querySelectorAll('.button-more');

moreButtons.forEach(function(button){
  var id = button.dataset.row;
  var rowContainer = document.getElementById('row-' + id);
  button.addEventListener('click', function(){
    rowContainer.classList.add('active');
  });
});

var lessButtons = document.querySelectorAll('.button-less');

lessButtons.forEach(function(button){
  var id = button.dataset.row;
  var rowContainer = document.getElementById('row-' + id);
  button.addEventListener('click', function(){
    rowContainer.classList.remove('active');
  });
});
