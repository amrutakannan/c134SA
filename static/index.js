var date = new Date()
let display_date= "Date:" + date.toLocaleDateString()

//Load HTML DOM
$(document).ready(function () {
    $("#display_date").html(display_date)
})

let predicted_emotion;
//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

$(function () {
    $("#predict_button").click(function () {

        let input_data = {
            "text": $("#text").val()
        }
        console.log(input_data)

        //AJAX for predicting emotion
		
    });
})