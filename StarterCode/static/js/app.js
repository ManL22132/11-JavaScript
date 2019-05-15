// from data.js
var tableData = data;

// *****************************************************************************
// Select tbody from the index.html file
// *****************************************************************************
tbody = d3.select("tbody");

// *****************************************************************************
// Function to display the data passed in as a table.
// *****************************************************************************
function displayData(data){ 
  // Clear the table
  tbody.text("");

  // Test to see if there is any data in the filtered dataset
  if (data.length > 0) {
    // Check see if there is data, display the data in the table body
    data.forEach(function(sighting){
      var new_tr = tbody.append("tr");
      Object.entries(sighting).forEach(function ([key, value]) {
        new_td = new_tr.append("td").text(value);
      });
    });
  } else {
    // If there is no data, display an alert messagee to user.
    alert("No sightings on that date, please try again")
  }
}

// Provide the initial display of the default dataset
displayData(tableData);

// Define the user's input field and the search button
var dateInputText = d3.select("#datetime");
var searchButton = d3.select("#search-btn");

// Search Button click event handler.

function clickSelect(){
  d3.event.preventDefault();
  console.log(dateInputText.property("value"));
  var new_table = tableData.filter(sighting => 
                  sighting.datetime===dateInputText.property("value"));
  displayData(new_table);
}


// Event listener to handle new Search Button click
searchButton.on("click", clickSelect);
