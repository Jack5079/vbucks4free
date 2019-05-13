var v = document.getElementById("count"); // The V-Bucks count
var u = document.getElementById("user"); // The username input
// Submit code
function submit() {
    if (v.value == "" || u.value == "") { // If either of the values aren't filled
        swal({ // Show an alert to the user
            title: "Oops!",
            text: "Fill in the username and V-Bucks count.",
            icon: "error",
        });
    } else if (parseInt(v.value) <= 0) { // If the V-Bucks number is negative
        swal({ // Show an alert to the user
            title: "Oops!",
            text: "Use a postive number for the V-Bucks count.",
            icon: "error",
        });
    } else { // When the user types in the info, gnome them.
        window.location.href = "https://www.youtube.com/embed/6n3pFFPSlW4?autoplay=1&controls=0"; // Autoplaying YT embed link without controls
    }
}
