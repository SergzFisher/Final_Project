// shortcuts for further commands for main page
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const mainTable1 = document.getElementById("mainTable1");
const mainTable2 = document.getElementById("mainTable2");
// each button is supposed to have it's own outcome
const submit1Button = document.getElementById("submit1");
const submit2Button = document.getElementById("submit2");
const skip1Button = document.getElementById("skip1");
const skip2Button = document.getElementById("skip2");

// two functions to make Elements appear and disappear
function showElement(showing) {
    showing.style.opacity = "1";
}

function hideElement(hiding) {
    hiding.style.opacity = "0";
    setTimeout(() => {
        hiding.style.display = "none";
    }, 1000);
}

submit1Button.addEventListener("click", function () {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    if (firstName.trim() !== "" && lastName.trim() !== "") {
        showElement(section2);
        hideElement(mainTable1);
        document.getElementById("welcomeID1")
            .textContent = `Hello, ${firstName} ${lastName} !`;
        function removeInputValue() {
            document.getElementById("first-name").value = null;
            document.getElementById("last-name").value = null;
        }
        removeInputValue()
    } else {
        alert("Please enter both First Name and Last Name.");
    }
});

submit2Button.addEventListener("click", function () {
    showElement(section3);
    hideElement(mainTable2);
    document.getElementById("welcomeID2")
        .textContent = `Great Stuff !`;
    function removeInputValue() {
        document.getElementById("street").value = null;
        document.getElementById("suburb").value = null;
        document.getElementById("city").value = null;
        document.getElementById("zip").value = null;
        document.getElementById("email").value = null;
    }
    removeInputValue();
});

skip1Button.addEventListener("click", function () {
    showElement(section3);
    hideElement(mainTable2);
    document.getElementById("welcomeID2")
        .textContent = `It Wasn't That Necessary Though`;
    function removeInputValue() {
        document.getElementById("street").value = null;
        document.getElementById("suburb").value = null;
        document.getElementById("city").value = null;
        document.getElementById("zip").value = null;
        document.getElementById("email").value = null;
    }
    removeInputValue();
});

skip2Button.addEventListener("click", function () {
    alert("Alright, I'll stop. Let's move on!");
})