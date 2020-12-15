window.addEventListener("load", (event) => {
    console.log("Loading page");
    start();
});

//variables
let dataList = [];
let filterList = [];
let checkboxes = [];
let checkboxesValues;
let valuesToString;
let checktargetID;
let check;
let radiotargetID;
let radiocheck;
//selectors
let inputName = document.querySelector("#inputName");
let result = document.querySelector("#root");
let headerResult = document.querySelector("#header--result")
let btnSearch = document.querySelector("#btn--search");
let btnClear = document.querySelector("#btn--clear");
let checkOptions = document.querySelectorAll("input[type=checkbox]");
let radioOptions = document.querySelectorAll("input[type=radio]");

// starting js
function start() {
    //  adding events 
    inputName.addEventListener("keyup", handleInputChange);
    // buttons
    btnSearch.addEventListener("click", handleSearchButton);
    btnClear.addEventListener("click", handleClearButton);
    // checkboxes
    checkOptions = addEventListener("input", handleCheckOptions);
    radioOptions = addEventListener("input", handleRadioOptions);
}

function handleInputChange(event) {
    //add conditiond according to the typinh inpu
    //avoiding empty input
    if (inputName.value === "") {
        alert("Type something to continue");
    }
    if (inputName.value !== "") {
        if (event.key === "Enter") {
            searchDevs();
            filterData();
        }
    }
}

function handleSearchButton(event) {
    //avoiding empty input
    inputName.value === "" ? alert("Type something to continue or hit the checkboxes") : searchDevs();
}

function handleClearButton(event) {
    inputName.value = "";
}

function handleCheckOptions(event) {
    // once a box is picked up, the searching can start, using event.target.id as params
    //event.target.id returns the language
    checktargetID = event.target.id
    check = event.target.checked
    searchDevs();
}

function handleRadioOptions(event) {
    // once a box is picked up, the searching can start, using event.target.id as params
    //event.target.id returns the language
    radiotargetID = event.target.id
    radiocheck = event.target.checked
    searchDevs();
}

async function searchDevs() {
    // fetch data into datalist
    const url = "./backend/devs.json";
    const res = await fetch(url);
    const json = await res.json();
    dataList = json.devs.map((item) => {
        const { name, age, picture, programmingLanguages } = item;
        const language = programmingLanguages.map((item) => {
            return item.language
            // + " " + item.experience
        });
        return {
            name,
            age,
            picture,
            skills: language.toString()
        }
    })
        .sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    // console.log("fetching data", dataList);
    filterData();
}

function filterData() {
    //filter tha data based on datalist that includes nae value
    filterList = dataList.filter((item) =>
        item.name.toLowerCase().includes(inputName.value.toLowerCase())
    );

    // if checbox is checked, run a second filter based on the target id value (skills)
    // OR: includes() one or another
    // AND: === one and another
    if (document.querySelector("input[type=checkbox]:checked")) {
        // create an array o save all checked boxes
        checkboxes = [].slice.call(document.querySelectorAll("input[type=checkbox]:checked"));
        checkboxesValues = checkboxes.map(item => item.value);
        valuesToString = checkboxesValues.toString();
        //then use this array to filter results     
        filterList = filterList.filter((item) => item.skills === valuesToString);
    }

    if (document.querySelector("#radioOr").checked) {
        filterList = filterList.filter((item) => item.skills.includes(valuesToString));
    }
    // then, render after first filter
    console.log(checkboxesValues);
    console.log("filtered list", filterList);
    renderResults();
}

function renderResults() {
    // this method will render the filterListwith html code
    //generate a card and dev content to be displayed 
    let div = "";
    filterList.forEach((item) => {
        const { picture, name, age, skills } = item;
        const element = `        
        <img src="${picture}" alt="${name}" /> 
        <div class="card__container--content">
        <p>Name: ${name}, Age: ${age}</p>
        <p>Languages: ${skills} </p>        
        </div>
        `;
        div += '<div class="card">' + element + '</div>';
    });
    //then, add this to the html
    result.innerHTML = div;
    headerResult.textContent = filterList.length;
}