const menuIcon = document.querySelector(".menu-icon");
const navItems = document.querySelector(".nav-items");
const closeIcon = document.querySelector(".close-icon");
const navItemLinks = document.querySelectorAll(".nav-items ul li");
const mainNav = document.querySelector("nav.main-nav");
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dots .dot");

menuIcon.addEventListener("click", () => {
  navItems.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  navItems.classList.remove("active");
});

navItemLinks.forEach((li, i) => {
  li.style.transitionDelay = `${i * 150}ms`;
});

navItemLinks.forEach((i) => {
  i.addEventListener("click", () => {
    navItems.classList.remove("active");
  });
});

const removeActiveClass = () => {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
};

window.addEventListener("scroll", () => {
  let windowTop = window.scrollY;

  if (windowTop > 100) {
    mainNav.style.padding = "8px 0";
  } else {
    mainNav.style.padding = "16px 0";
  }
});

// Script

$(document).ready(function () {
  $("#SubmitButton").click(function () {
    function GetQueryParam(parameter, address) {
      var p = escape(unescape(parameter));
      var regex = new RegExp(
        /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
      );
      var match = regex.exec(address);
      var value = null;
      if (match != null) {
        value = match[1];
      }
      return value;
    }
    var videoURL = $("#JPvidURL").val();
    var theID = GetQueryParam("v", videoURL);
    $("#thumbnails").empty();
    if (theID != null) {
      $("<div></div>")
        .html(
          '<p>These are your YouTube thumbnail Download. *Right Click on a bellow image and then Click "Save Image As" to Download YouTube Thumbnail</p><h3>» High Definition Thumbnail of the video (1280x720)</h3><a href="http://img.youtube.com/vi/' +
            theID +
            '/maxresdefault.jpg" target="_blank"><img src="https://img.youtube.com/vi/' +
            theID +
            '/maxresdefault.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><h3>» Small Definition Thumbnail of the video (640x480)</h3><a href="http://img.youtube.com/vi/' +
            theID +
            '/sddefault.jpg" target="_blank"><img src="https://img.youtube.com/vi/' +
            theID +
            '/sddefault.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><h3>» High Quality Thumbnail of the video (480x360)</h3><a href="http://img.youtube.com/vi/' +
            theID +
            '/hqdefault.jpg" target="_blank"><img src="https://img.youtube.com/vi/' +
            theID +
            '/hqdefault.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><h3>» Medium Quality Thumbnail of the video (320x180)</h3><a href="http://img.youtube.com/vi/' +
            theID +
            '/mqdefault.jpg" target="_blank"><img src="https://img.youtube.com/vi/' +
            theID +
            '/mqdefault.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><h3>» Default Thumbnail (120x90)</h3><a href="http://img.youtube.com/vi/' +
            theID +
            '/default.jpg" target="_blank"><img src="https://img.youtube.com/vi/' +
            theID +
            '/default.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><h3>» 3 Screenshots from Video (120x90)</h3><a href="http://img.youtube.com/vi/' +
            theID +
            '/1.jpg" target="_blank"><img src="https://img.youtube.com/vi/' +
            theID +
            '/1.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><br><a href="http://img.youtube.com/vi/' +
            theID +
            '/2.jpg" target="_blank"><img src="https://img.youtube.com/vi/' +
            theID +
            '/2.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><br><a href="http://img.youtube.com/vi/' +
            theID +
            '/3.jpg" target="_blank"><img src="https://img.youtube.com/vi/' +
            theID +
            '/3.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a>'
        )
        .appendTo("#thumbnails");
    } else {
      $("<div></div>")
        .html('<div id="sorry">It seems like your "url" has an error</div>')
        .appendTo("#thumbnails");
    }
  });
});
function showHide() {
  var div = document.getElementById("hidden_div");
  if (div.style.display == "none") {
    div.style.display = "";
  } else {
    div.style.display = "";
  }
}

function showDiv() {
  var div = document.getElementById("show_div");
  if (div.style.display == "none") {
    div.style.display = "";
  } else {
    div.style.display = "";
  }
}
