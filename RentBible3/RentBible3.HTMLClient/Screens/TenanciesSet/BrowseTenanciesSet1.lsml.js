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
myapp.BrowseTenanciesSet1.ABOUT_render = function (element, contentItem) {
    // Write code here.
    element.innerHTML = `<p><b>Our Mission:</b></p>
<p>Make world easier to live in by letting others know about someone's bad behavior or injustice that you have experienced</p>
<p><b>For Lessors:</b> allow others know about tenants who damaged your property!</p>
<p><b>For Tenants: </b> allow others know about lessors who tricked you!</p>
<br/><br/>
<p>Have questions?</p>
<p>Want to be a part of this?</p>
<p><b>Contact us:</b> rentbible@gmail.com</p>`;
};