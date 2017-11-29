/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewTenancies1.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Tenancy.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Tenancy." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

