// shortcuts for further commands on main page
const section1 = document.getElementById("mainSection1");
const section2 = document.getElementById("mainSection2");
const section3 = document.getElementById("mainSection3");
const mainTable1 = document.getElementById("mainTable1");
const mainTable2 = document.getElementById("mainTable2");
// each button is supposed to have it's own outcome
const submit1Button = document.getElementById("submit1");
const submit2Button = document.getElementById("submit2");
const submit3Button = document.getElementById("submit3");
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
    const street = document.getElementById("street").value;
    const suburb = document.getElementById("suburb").value;
    const city = document.getElementById("city").value;
    const zip = document.getElementById("zip").value;
    const email = document.getElementById("email").value;
    if (street.trim() !== "" || suburb.trim() !== "" || city.trim() !== "" || zip.trim() !== "" || email.trim() !== "") {
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
    } else {
        alert("I'm sorry but all details needs to be provided, or select skip")
    }
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

submit3Button.addEventListener("click", function () {
    alert("It was a joke... please, don't do this again");
})

skip2Button.addEventListener("click", function () {
    alert("Alright, I'll stop. Let's move on!");
})