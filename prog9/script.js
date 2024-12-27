$(document).ready(function () {
    // a. Append user input to the paragraph
    $("#appendParagraphBtn").click(function () {
        const paragraphText = $("#paragraphInput").val();
        if (paragraphText) {
            $("#myParagraph").append(" " + paragraphText);
            $("#paragraphInput").val(""); // Clear the input field
        } else {
            alert("Please enter text to add to the paragraph.");
        }
    });

    // b. Append user input to the list
    $("#appendListBtn").click(function () {
        const listItemText = $("#listInput").val();
        if (listItemText) {
            $("#myList").append("<li>" + listItemText + "</li>");
            $("#listInput").val(""); // Clear the input field
        } else {
            alert("Please enter text to add to the list.");
        }
    });

    // c. Animate the div and change CSS properties
    $(".animatedDiv").click(function () {
        $(this).animate({
            width: "180px",
            height: "180px",
            fontSize: "1.2em",
            lineHeight: "180px"
        }, 800, function () {
            // Change the color after animation
            $(this).css("background-color", "#ff5733");
        });
    });
});
