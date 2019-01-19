$("#submit").on("click", function (event){
    event.preventDefault()
    var newRow= $("<tr>")
    var newName= $("<td>Text</td>")
    var newDestination= $("<td>Text</td>")
    var newFrequency= $("<td>Text</td>")
    var newArrival =$("<td>Text</td>")
    var newMinAway= $("<td>Text</td>")
    
    newRow.append(newName)
    newRow.append(newDestination)
    newRow.append(newFrequency)
    newRow.append(newArrival)
    newRow.append(newMinAway)
    
    $("tbody").append(newRow)

})