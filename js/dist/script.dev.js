"use strict";

function selectPackage(number) {
  var packageBig = document.getElementById("package" + number);
  var packageSmall = document.getElementById("packageSmall" + number);
  var allPackages = document.getElementsByClassName("package");
  Array.prototype.forEach.call(allPackages, function (e) {
    e.classList.remove("active");
  });
  var allPackagesSm = document.getElementsByClassName("package-sm");
  Array.prototype.forEach.call(allPackagesSm, function (e) {
    e.classList.remove("active");
  });
  packageBig.classList.add("active");
  packageSmall.classList.add("active");
}