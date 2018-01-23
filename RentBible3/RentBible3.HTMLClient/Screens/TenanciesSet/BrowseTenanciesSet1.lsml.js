/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseTenanciesSet1.Created_postRender = function (element, contentItem) {


    var value = element.innerText;
    if (value && value.split(" ").length > 0) {
        element.innerText = value.split(" ")[0];
    }

    var dateObj = $(element);

    dateObj.css({
        "float": "right"
    });
};

myapp.BrowseTenanciesSet1.TenancyOverallValuation_postRender = function (element, contentItem) {
    var dateObj = $(element);

    dateObj.css({
        "font-size": "20px",
        "font-weight": "bold"
    });
};
myapp.BrowseTenanciesSet1.Group_postRender = function (element, contentItem) {
    var dateObj = $(element);
    //dateObj.css({
    //    "background-color": "red"
    //});
};
myapp.BrowseTenanciesSet1.rows_postRender = function (element, contentItem) {
    // Write code here.
    var dateObj = $(element);
    dateObj.css({
        "border-color": "red"
    });
};
myapp.BrowseTenanciesSet1.AddTenancy_postRender = function (element, contentItem) {
    // Write code here.
    var dateObj = $(element);

    //dateObj.css({
    //    "background-color": "red",
    //    "color": "red"
    //});
    
};