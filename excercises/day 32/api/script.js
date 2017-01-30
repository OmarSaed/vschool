function loadData() {

    $.ajax({
        url: "http://api.vschool.io/omarsaed/todo/",
        type: "GET",
        success: function (data) {
            $(".output").html("");
            for (var i = 0; i < data.length; i++) {
                $(".output").append("<li id = '" + data[i]._id + "'>" + data[i].title + " " + data[i]._id + "</li>");

            }
        }
    })

};

$(document).ready(function () {

    loadData();
    $("#submit").click(addData);


})

function addData() {

    var title = $("#title").val();
    var description = $("#description").val();
    var price = $("#price").val();
    var imageUrl = $("#imageUrl").val();
    var check = $("#checkbox").prop("checked");



    var data = {
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
        check: check

    }

    $.ajax({
        data: data,
        url: "http://api.vschool.io/omarsaed/todo/",
        type: "POST",

        success: function (data) {

            loadData();
        }

    })


};