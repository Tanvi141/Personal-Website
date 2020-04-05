document.forms["myForm"]["fname"].value="";
document.forms["myForm"]["fskill"].value="";

var table=document.getElementById("tbody");

		if (!(localStorage.getItem("arr") === null)) {

			var retrievedData = localStorage.getItem("arr");
	    var array = JSON.parse(retrievedData);
			for (var i = 0; i < array.length; i++) {
        var newentry = document.createElement("tr");
        newentry.innerHTML =
        "<td>" + array[i].name + "</td>"+
        "<td>" + array[i].skill.toString() + "</td>"+
        "<td>" + array[i].level.toString()  + "</td>" ;
        table.appendChild(newentry);
		}
	}

function addEnt(){

	if (localStorage.getItem("arr") === null) {
		var array = [];
		var list = {
    name: document.forms["myForm"]["fname"].value,
    skill: document.forms["myForm"]["fskill"].value,
    level: document.forms["myForm"]["flevel"].value
    };

	   array.push(list);
     newentry = document.createElement("tr");
     newentry.innerHTML =
     "<td>" + list.name + "</td>"+
     "<td>" + list.skill.toString() + "</td>"+
     "<td>" + list.level.toString()  + "</td>" ;
     table.appendChild(newentry);
     localStorage.setItem("arr", JSON.stringify(array));
}

else{

	var retrievedData = localStorage.getItem("arr");
	var array = JSON.parse(retrievedData);
	var list = {
    name: document.forms["myForm"]["fname"].value,
    skill: document.forms["myForm"]["fskill"].value,
    level: document.forms["myForm"]["flevel"].value
  };

	array.push(list);
  newentry = document.createElement("tr");
  newentry.innerHTML =
  "<td>" + list.name + "</td>"+
  "<td>" + list.skill.toString() + "</td>"+
  "<td>" + list.level.toString()  + "</td>" ;
  table.appendChild(newentry);
  localStorage.setItem("arr", JSON.stringify(array));
}

  document.forms["myForm"]["fname"].value="";
  document.forms["myForm"]["fskill"].value="";
}
