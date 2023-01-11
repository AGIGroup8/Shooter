// Modal Image Gallery

    setTimeout(()  => {
        addEmailToDOM("AEmail", "aldani@kth.se")
    }, 1000) // 1000ms or 1 second

    setTimeout(()  => {
        addEmailToDOM("EEmail", "echen@kth.se")
    }, 1200) // 1000ms or 1 second

    setTimeout(()  => {
        addEmailToDOM("JEmail", "jacobbra@kth.se")
    }, 1400) // 1000ms or 1 second

    setTimeout(()  => {
        addEmailToDOM("MEmail", "marcush2@kth.se")
    }, 1600) // 1000ms or 1 second

    setTimeout(()  => {
        addEmailToDOM("REmail", "yren@kth.se")
    }, 1800) // 1000ms or 1 second
    
    setTimeout(()  => {
        addEmailToDOM("SEmail", "simonblo@kth.se")
    }, 2000) // 1000ms or 1 second
    
    function addEmailToDOM(id, email) {
        document.getElementById(id).textContent = email;
        document.getElementById(id).href = "mailto:" + email;
    }
  
    function onClick(element) {
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display = "block";
        var captionText = document.getElementById("caption");
        captionText.innerHTML = element.alt;
    }
    
    
    // Toggle between showing and hiding the sidebar when clicking the menu icon
    var mySidebar = document.getElementById("mySidebar");
    
    function w3_open() {
        if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        } else {
        mySidebar.style.display = 'block';
        }
    }
    
    // Close the sidebar with the close button
    function w3_close() {
        mySidebar.style.display = "none";
    }