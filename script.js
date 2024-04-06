// DUMMY DATA
const DummyCarsData = [
    { name: "Toyota Camry", status: "available", type: "Sedan", price: 700000, img: "https://www.motortrend.com/uploads/sites/10/2021/02/2021-toyota-camry-se-sedan-angular-front.png" },
    { name: "Honda Accord", status: "available", type: "Sedan", price: 770000, img: "https://www.motortrend.com/uploads/sites/10/2022/01/2021-honda-accord-lx-sedan-angular-front.png" },
    { name: "Ford Explorer", status: "available", type: "SUV", price: 980000, img: "https://www.motortrend.com/uploads/sites/10/2015/11/2012-ford-explorer-xlt-suv-angular-front.png" },
    { name: "Chevrolet Tahoe", status: "available", type: "SUV", price: 1050000, img: "https://www.motortrend.com/uploads/sites/10/2022/12/2022-chevrolet-tahoe-premier-suv-angular-front.png" },
    { name: "Volkswagen Golf", status: "available", type: "Hatchback", price: 630000, img: "https://www.motortrend.com/uploads/sites/10/2022/05/2021-volkswagen-golf-tsi-5door-hatchback-angular-front.png" },
    { name: "Ford Mustang", status: "available", type: "Coupe", price: 910000, img: "https://www.motortrend.com/uploads/sites/10/2022/08/2022-ford-mustang-fastback-ecoboost-coupe-angular-front.png" },
    { name: "Toyota Sienna", status: "available", type: "Minivan", price: 1120000, img: "https://www.motortrend.com/uploads/sites/10/2021/11/2021-toyota-sienna-le-hybrid-minivan-angular-front.png" },
    { name: "Ford F-150", status: "available", type: "Truck", price: 1260000, img: "https://www.motortrend.com/uploads/sites/10/2022/03/2022-ford-f-150-xl-medium-regular-pick-up-angular-front.png" },
    { name: "Chevrolet Impala", status: "unavailable", type: "Sedan", price: 840000, img: "https://www.motortrend.com/uploads/sites/10/2017/12/2018-chevrolet-impala-1lt-sedan-angular-front.png" },
    { name: "Jeep Wrangler", status: "unavailable", type: "SUV", price: 1120000, img: "https://www.motortrend.com/uploads/sites/10/2015/11/2012-jeep-wrangler-sport-suv-angular-front.png" },
    { name: "Nissan Versa", status: "available", type: "Hatchback", price: 700000, img: "https://www.motortrend.com/uploads/sites/10/2016/10/2017-nissan-versa-sv-auto-sedan-angular-front.png" },
    { name: "BMW 4 Series", status: "unavailable", type: "Coupe", price: 1050000, img: "https://www.motortrend.com/uploads/sites/10/2019/05/2020-bmw-4-series-430i-gran-5door-hatchback-angular-front.png" },
    { name: "Chrysler Pacifica", status: "available", type: "Minivan", price: 1190000, img: "https://www.motortrend.com/uploads/sites/10/2018/11/2019-chrysler-pacifica-touring-l-plus-minivan-angular-front.png" },
    { name: "Ram 1500", status: "unavailable", type: "Truck", price: 1330000, img: "https://www.motortrend.com/uploads/sites/10/2020/02/2020-ram-1500-big-horn-short-box-crew-cab-pick-up-angular-front.png" },
    { name: "Honda Civic", status: "available", type: "Sedan", price: 770000, img: "https://www.motortrend.com/uploads/sites/10/2015/11/2012-honda-civic-coupe-ex-auto-angular-front.png" },
    { name: "Subaru Outback", status: "available", type: "SUV", price: 980000, img: "https://www.motortrend.com/uploads/sites/10/2017/10/2018-subaru-outback-premium-wagon-angular-front.png" },
    { name: "Toyota Prius", status: "available", type: "Hatchback", price: 700000, img: "https://www.motortrend.com/uploads/sites/10/2017/11/2017-toyota-prius-v-four-mini-mpv-angular-front.png" },
    { name: "Audi A5", status: "unavailable", type: "Coupe", price: 1120000, img: "https://www.motortrend.com/uploads/sites/10/2020/08/2020-audi-a5-sportback-premium-plus-4wd-5door-hatchback-angular-front.png" },
    { name: "Kia Sedona", status: "unavailable", type: "Minivan", price: 1050000, img: "https://www.motortrend.com/uploads/sites/10/2015/11/2007-kia-sedona-lx-lwb-van-angular-front.png" },
    { name: "Chevrolet Silverado", status: "unavailable", type: "Truck", price: 1400000, img: "https://www.motortrend.com/uploads/sites/10/2016/12/2017-chevrolet-silverado-1500-wt-regular-pickup-angular-front.png" },
    { name: "Hyundai Elantra", status: "available", type: "Sedan", price: 700000, img: "https://www.motortrend.com/uploads/sites/10/2015/11/2016-hyundai-elantra-sport-sedan-angular-front.png" },
    { name: "Jeep Grand Cherokee", status: "available", type: "SUV", price: 980000, img: "https://www.motortrend.com/uploads/sites/10/2021/09/2021-jeep-grand-cherokee-l-limited-4wd-suv-angular-front.png" },
    { name: "Mazda 3", status: "available", type: "Hatchback", price: 630000, img: "https://www.motortrend.com/uploads/sites/10/2015/11/2015-mazda-mazda3-i-touring-sedan-angular-front.png" },
    { name: "Mercedes-Benz C-Class", status: "available", type: "Coupe", price: 910000, img: "https://www.motortrend.com/uploads/sites/10/2020/12/2021-mercedes-benz-c-class-300-sedan-angular-front.png" },
    { name: "Dodge Caravan", status: "available", type: "Minivan", price: 1120000, img: "https://www.motortrend.com/uploads/sites/10/2020/03/2020-dodge-grand-caravan-sxt-minivan-angular-front.png" },
    { name: "GMC Sierra 1500", status: "available", type: "Truck", price: 1260000, img: "https://www.motortrend.com/uploads/sites/10/2020/10/2021-gmc-sierra-1500-base-long-regular-cab-pick-up-angular-front.png" },
    { name: "Fiat 500", status: "unavailable", type: "Other", price: 770000, img: "https://www.motortrend.com/uploads/sites/10/2015/11/2013-fiat-500-lounge-hatchback-angular-front.png" },
    { name: "Tesla Model X", status: "unavailable", type: "Other", price: 2100000, img: "https://www.motortrend.com/uploads/sites/10/2022/10/2022-tesla-model-x-4wd-suv-angular-front.png" },
    { name: "Volkswagen Atlas", status: "unavailable", type: "SUV", price: 1050000, img: "https://www.motortrend.com/uploads/sites/10/2021/12/2022-volkswagen-atlas-se-v6-suv-angular-front.png" },
    { name: "Ford Escape", status: "available", type: "SUV", price: 910000, img: "https://www.motortrend.com/uploads/sites/10/2017/09/2018-ford-escape-titanium-suv-angular-front.png" },
    { name: "M1 Abrams", status: "booked", type: "Other", price: 66981960000, img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Abrams-transparent.png", user:{fullname: "Rahmat", email: "pentagon@gov.us", tel: "+1 273 1935", date: ["2001-10-29","2001-11-11"], driver: false, totalDays: "13 Hari", totalPrice: 870765480000} }
];

// [LocalStrage FUNCTION] //
// ------------------------------------------------------------------------- //
function saveLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function retrieveLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// [RANDOM FUNCTION] //
// ------------------------------------------------------------------------- //
function filterDataStatus(data, value) {
    return data.filter(car => car.status === value);
}

function imgError(img) {
    const icon = img.nextElementSibling;
    if (img.complete && img.naturalHeight !== 0) {
        img.style.display = ''; 
        icon.style.display = 'none'; 
    } else {
        img.style.display = 'none'; 
        icon.style.display = 'inline';
    }
    img.onerror = null;
}


// [Dummy Local Storage Option] //
// ------------------------------------------------------------------------- //
const dummyLocalStorageBTN = document.querySelector('.dummyLocalStorage.BTN');
const clearLocalStorageBTN = document.querySelector('.clearLocalStorage.BTN');

function addDummyData() {
    let data = retrieveLocalStorage('carData');
    let addedData = [...data, ...DummyCarsData];
    saveLocalStorage('carData', addedData);
    renderEverything();
}

function clearLocalStorage() {
    localStorage.removeItem('carData');
    renderEverything();
}

dummyLocalStorageBTN.addEventListener('click', addDummyData);
clearLocalStorageBTN.addEventListener('click', clearLocalStorage);

// [GENERATE CARDS] //
// ------------------------------------------------------------------------- //
function generateCarCard(data, index) {
    // DESTRUCTURING
    let {name, type, price, img, status} = data;

    // PARENT DIV
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('mobilCard');
    cardDiv.dataset.index = index;

    // FIRST DIV //
    const firstChildDiv = document.createElement('div');
    // EDIT BUTTON
    if (status !== "booked") {
        const editButton = document.createElement('button');
        editButton.classList.add('editCar-OpModal');
        editButton.innerHTML = '<span class="material-symbols-outlined">edit_square</span>';  
        firstChildDiv.appendChild(editButton) ;
    }
    // IMAGE ELEMENT
    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgElement.loading = "lazy";
    imgElement.setAttribute('onerror', 'imgError(this)');
    // IMG ERROR ELEMENT
    const iconSpan = document.createElement('span');
    iconSpan.classList.add('material-symbols-outlined', 'imgIcon');
    iconSpan.textContent = 'directions_car';
    // APPEND ALL
    [imgElement, iconSpan].forEach(element => firstChildDiv.appendChild(element));

    // SECOND DIV //
    const secondChildDiv = document.createElement('div');
    // CAR NAME ELEMENT
    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = name;
    // CAR TYPE ELEMENT
    const typeSpan = document.createElement('span');
    typeSpan.textContent = type;
    // APPEND ALL
    [nameParagraph, typeSpan].forEach(element => secondChildDiv.appendChild(element));

    // THIRD DIV //
    const thirdChildDiv = document.createElement('div');
    // CAR RENT PRICE PARAGRAPH
    const rentPriceParagraph = document.createElement('p');
    rentPriceParagraph.textContent = 'Harga Sewa';
    // CAR RENT PRICE ELEMENT
    const priceDetailsParagraph = document.createElement('p');
    priceDetailsParagraph.innerHTML = `<sup>Rp</sup>${price.toLocaleString('id-ID')} / Hari`;
    // APPEND ALL
    [rentPriceParagraph, priceDetailsParagraph].forEach(element => thirdChildDiv.appendChild(element));

    // APPEND ALL DIV
    [firstChildDiv, secondChildDiv, thirdChildDiv].forEach(div => cardDiv.appendChild(div));

    // FOURTH DIV //
    const fourthChildDiv = document.createElement('div');
    const actionButton = document.createElement('button');
    switch (status) {
        case 'available':
            actionButton.classList.add('rentCar-OpModal');
            actionButton.textContent = 'Sewa Mobil';
            break;
        case 'booked':
            actionButton.classList.add('bookedCar-OpModal');
            actionButton.textContent = 'Detail Mobil';
            break;
        case 'unavailable':
            actionButton.classList.add('statusAva');
            actionButton.textContent = 'Set Status Available';
            break;            
        default:
            console.error(`Unknown Status: ${status}`);
            break;
    }
    fourthChildDiv.appendChild(actionButton); 
    cardDiv.appendChild(fourthChildDiv);

    return cardDiv;
}


// [RENDER CARDS] //
// ------------------------------------------------------------------------- //
const availableCarList = document.querySelector('.availableCarList');
const bookedCarList = document.querySelector('.bookedCarList');
const unavailableCarList = document.querySelector('.unavailableCarList');

function renderCarList(data) {
    [availableCarList, bookedCarList, unavailableCarList].forEach(list => list.innerHTML = ''); // Clear Cards
    data.forEach((car, index) => {
        const carCard = generateCarCard(car, index);
        switch (car.status) {
            case 'available':
                availableCarList.appendChild(carCard);
                break;
            case 'booked':
                bookedCarList.appendChild(carCard);
                break;
            case 'unavailable':
                unavailableCarList.appendChild(carCard);
                break;
            default:
                console.error(`Unknown status: ${car.status}`);
        }
    });
}

// [HOMEPAGE DATABASE TABLE] //
// ------------------------------------------------------------------------- //
const totalTable = document.querySelector('.totalTable');
const databaseTable = document.querySelector('.databaseTable');

function updateDataTotalTable(data) {
    let elements = totalTable.querySelectorAll('tr td:nth-child(2)');
    let [jumlahMobilTD, availableTD, bookedTD, unavailableTD] = elements;
    jumlahMobilTD.textContent = data.length;
    availableTD.textContent = filterDataStatus(data, 'available').length;
    bookedTD.textContent = filterDataStatus(data, 'booked').length;
    unavailableTD.textContent = filterDataStatus(data, 'unavailable').length;
}

function generateDatabaseTable(data) {
    let rowsTable = document.createDocumentFragment();
    data.forEach(({name, type, status}) => {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        tdName.textContent = name;
        let tdType = document.createElement('td');
        tdType.textContent = type;
        let tdStatus = document.createElement('td');
        tdStatus.textContent = status.charAt(0).toUpperCase() + status.slice(1); // Uppercase first letter
        tdStatus.classList.add(status);
        [tdName, tdType, tdStatus].forEach(td => tr.appendChild(td));
        rowsTable.appendChild(tr);
    });
    return rowsTable;
}

function renderHomeTable(data) {
    let tableBody = databaseTable.querySelector('tbody');
    tableBody.innerHTML = '';
    updateDataTotalTable(data);
    tableBody.appendChild(generateDatabaseTable(data));
}
let tableBody = databaseTable.querySelector('tbody');

// [RENDER EVERYTHING] //
// ------------------------------------------------------------------------- //
function renderEverything() {
    let data = retrieveLocalStorage('carData');
    renderCarList(data);
    renderHomeTable(data);
}
renderEverything();

// [RENTAL HISTORY TABLE] //
// ------------------------------------------------------------------------- //
const historyTableTBODY = document.querySelector('.historyTable tbody');
function addHistory(status, name) {
    let tr = document.createElement('tr');
    let tdNo = document.createElement('td');
    tdNo.textContent = historyTableTBODY.children.length + 1;
    let tdNama = document.createElement('td');
    tdNama.textContent = name;
    let tdStatus = document.createElement('td');
    tdStatus.textContent = status;
    let tdWaktu = document.createElement('td');
    let currentTime = new Date;
    currentTime = currentTime.toLocaleTimeString([], { hour12: false })
    tdWaktu.textContent = currentTime;
    [tdNo, tdNama, tdStatus, tdWaktu].forEach(td => tr.appendChild(td));
    historyTableTBODY.appendChild(tr);
}

// [DOCUMENT EVENT DELEGATION] //
// ------------------------------------------------------------------------- //
document.addEventListener('click', function(e) {
    let target = e.target;
    switch (true) {
        case target.closest('.navbar button, button.closeSidebar') !== null:
            toggleAside();
            break;
        case target.closest('aside nav button') !== null:
            changePage(target);
            break;
        case target.closest('.addCar-OpModal.BTN') !== null:
            openAddCarModal(target);
            break;
        case target.closest('button.closeModal') !== null:
            closeModal(target);
            break;
        case target.closest('.editCar-OpModal') !== null:
            openEditCarModal(target);
            break;
        case target.closest('.rentCar-OpModal') !== null:
            openRentCarModal(target);
            break;
        case target.closest('.statusAva') !== null:
            setStatusToAvailable(target);
            break;
        case target.closest('.bookedCar-OpModal') !== null:
            openDetailModal(target);
            break;
    }
});


// [SIDEBAR JAVASCRIPT] //
// ------------------------------------------------------------------------- //
function toggleAside() {
    document.querySelector('aside').classList.toggle('sidebar-open');
    document.querySelector('.navbar').classList.toggle('sidebar-open');
    document.querySelector('.backdrop').classList.toggle('sidebar-open');
}

const buttons = document.querySelectorAll('aside nav button');
function changePage(target) {
    let clickedButton = target.closest('button');
    if (clickedButton) {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        clickedButton.classList.add('active');
        toggleAside();
        showActivePage();
    }
}

const pages = document.querySelectorAll('main > div.mainContent div.page');
function showActivePage() {
    pages.forEach((page, index) => {
        if (buttons[index].classList.contains('active')) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}
showActivePage();

// [DIALOG/MODAL STUFF] //
// ------------------------------------------------------------------------- //
// ADD CAR
const carDialog = document.querySelector('.carDialog');
function openAddCarModal(target) {
    let clickedButton = target.closest('button');
    if (clickedButton) {
        carDialog.showModal();
        addCarEvent();
    }
}

function addCarEvent() {
    const addCarBTN = document.querySelector('.addCar.BTN');
    addCarBTN.onclick = () => addCarData(addCarBTN);
}

function createCarObj(name, type, price, img) {
    return {
        name: name,
        status: "available",
        type: type,
        price: Number(price),
        img: img        
    };
}

function addCarData(button) {
    event.preventDefault();
    let getForm = document.querySelector('.carDialog .main > form');
    let getInputs = getForm.querySelectorAll('input, select');
    let [nameInput, priceInput, imgInput, typeInput] = getInputs;

    if (getForm.checkValidity()) {
        let data = retrieveLocalStorage('carData');
        let newCar = createCarObj(nameInput.value, typeInput.value, priceInput.value, imgInput.value);
        data.push(newCar);
        saveLocalStorage('carData', data);
        addHistory("Added", newCar.name)
        closeModal(button);
        renderEverything();
        // Clear Input
        [nameInput, priceInput, imgInput].forEach(input => input.value = '');
        typeInput.value = "Other";
    } else {
        getForm.classList.add('submit');
        setTimeout(() => {getForm.classList.remove('submit')}, 3000);
    }
}

// EDIT CAR
const editDialog = document.querySelector('.editDialog');
function openEditCarModal(target) {
    let clickedButton = target.closest('button');
    if (clickedButton) {
        let dataIndex = Number(clickedButton.closest('.mobilCard').dataset.index);
        editDialog.showModal();
        editCarInputs(dataIndex);
    }
}

function editCarInputs(index) {
    const data = retrieveLocalStorage('carData');
    const { name, price, img, type, status } = data[index];

    const getForm = document.querySelector('.editDialog .main > form');
    const getInputs = document.querySelectorAll('.editDialog .main > form > :is(input, select)');
    const getRadios = document.querySelectorAll('.editDialog .main > form > div > input[type="radio"]');

    const [nameInput, priceInput, imgInput, typeInput] = getInputs;
    nameInput.value = name;
    priceInput.value = price;
    imgInput.value = img;
    typeInput.value = type;

    getRadios.forEach(radio => {
        radio.checked = radio.value === status;
    });

    const editCarBTN = document.querySelector('.editCar.BTN');
    editCarBTN.onclick = event => {
        event.preventDefault();
        if (getForm.checkValidity()) {
            updateCarData(data, index, getInputs, getRadios);
            closeModal(editCarBTN);
            renderEverything();
        } else {
            getForm.classList.add('submit');
            setTimeout(() => getForm.classList.remove('submit'), 3000);
        }
    };

    const deleteCarBTN = document.querySelector('.deleteCar.BTN');
    deleteCarBTN.onclick = () => deleteCarData(data, index, deleteCarBTN);
}

function updateCarData(data, index, inputs, radios) {
    const [nameInput, priceInput, imgInput, typeInput] = inputs;
    const editedData = {
        name: nameInput.value,
        price: Number(priceInput.value),
        img: imgInput.value,
        type: typeInput.value,
        status: [...radios].find(radio => radio.checked).value
    };

    const previousStatus = data[index].status;
    const newStatus = editedData.status;

    let historyMessage = "Edited";
    if (newStatus !== previousStatus) {
        historyMessage += newStatus === "available" ? " (Set Available)" : " (Set Unavailable)";
    }
    addHistory(historyMessage, editedData.name);

    data[index] = editedData;
    saveLocalStorage('carData', data);
}

function deleteCarData(data, index, button) {
    addHistory("Deleted", data[index].name);
    data.splice(index, 1);
    saveLocalStorage('carData', data);
    closeModal(button);
    renderEverything();
}

// RENT CAR
const rentDialog = document.querySelector('.rentDialog');
function openRentCarModal(target) {
    let clickedButton = target.closest('button');
    if (clickedButton) {
        let dataIndex = Number(clickedButton.closest('.mobilCard').dataset.index);
        rentDialog.showModal();
        rentCarInputs(dataIndex);
    }
}

function rentCarInputs(index) {
    const data = retrieveLocalStorage('carData');
    const { name, price } = data[index];

    const getHeaderCarName = rentDialog.querySelector('.header > h1');
    getHeaderCarName.textContent = `Sewa ${name}`;

    const getForm = rentDialog.querySelector('.main > form');
    const getInputs = getForm.querySelectorAll('input:not([type="checkbox"])');
    const getDriverCheckbox = getForm.querySelector('input[type="checkbox"]');

    const displayRentPricePerDay = rentDialog.querySelector('.rentPricePerDay');
    const displayRentTotalDays = document.querySelector('.rentDialog .rentTotalDays');
    const displayRentTotalPrice = document.querySelector('.rentDialog .rentTotalPrice');

    [...getInputs, getDriverCheckbox].forEach(input => { // Clear Inputs
        input.value = '';
        input.checked = false;
    });

    const [userNameInput, userEmailInput, userTelInput, userPickupDate, userReturnDate] = getInputs;

    let totalDays;
    let totalPrice = 0;

    getDriverCheckbox.onchange = rentPricePerDay;
    userPickupDate.oninput = updateTotalDays;
    userReturnDate.oninput = updateTotalDays;

    function rentPricePerDay() {
        const driverPriceSpan = rentDialog.querySelector('.info > table tr:nth-child(1) td:nth-child(3)');
        const adjustedPrice = getAdjustedPrice();

        if (getDriverCheckbox.checked) {
            driverPriceSpan.classList.add('driverFee');
        } else {
            driverPriceSpan.classList.remove('driverFee');
        }

        displayRentPricePerDay.innerHTML = `<sup>Rp </sup>${adjustedPrice.toLocaleString('id-ID')}`;
        updateTotalPrice();
    }
    rentPricePerDay();

    function updateTotalDays() {
        totalDays = calculateDays(userPickupDate.value, userReturnDate.value);
        displayRentTotalDays.textContent = totalDays;
        updateTotalPrice();
    }
    updateTotalDays();

    function updateTotalPrice() {
        const adjustedPrice = getAdjustedPrice();
        totalPrice = adjustedPrice * (parseInt(totalDays) || 1);

        displayRentTotalPrice.innerHTML = `<sup>Rp </sup>${totalPrice.toLocaleString('id-ID')}`;
    }
    updateTotalPrice();

    function getAdjustedPrice() {
        let adjustedPrice = price;
        if (getDriverCheckbox.checked) {
            adjustedPrice += 200000;
        }
        return adjustedPrice;
    }

    function createUserData() {
        return {
            fullname: userNameInput.value,
            email: userEmailInput.value,
            tel: userTelInput.value,
            date: [userPickupDate.value, userReturnDate.value],
            driver: getDriverCheckbox.checked,
            totalDays: totalDays,
            totalPrice: totalPrice
        };
    }

    const rentCarButton = document.querySelector('.rentCar.BTN');
    rentCarButton.onclick = () => {
        event.preventDefault();
        if (getForm.checkValidity()) {
            const userData = createUserData();
            data[index].status = "booked";
            data[index].user = userData;
            saveLocalStorage('carData', data);
            closeModal(rentCarButton);
            renderEverything();
            addHistory("Booked", data[index].name);
        } else {
            getForm.classList.add('submit');
            setTimeout(() => getForm.classList.remove('submit'), 3000);
        }
    };
}

function calculateDays(startDateInput, endDateInput) {
    if (!startDateInput || !endDateInput) {
        return `Isi Input Tanggal`;
    }
    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    switch (true) {
        case startDate.getTime() === endDate.getTime():
            return `Tanggal tidak boleh sama`;
        case endDate < startDate:
            return `Tanggal tidak valid`;
        default:
            const differenceMs = endDate - startDate;
            const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
            return `${days} Hari`;
    }
}

// OPEN DETAIL MODAL
const bookedDialog = document.querySelector('.bookedDialog');
function openDetailModal(target) {
    let clickedButton = target.closest('button');
    if (clickedButton) {
        let dataIndex = Number(clickedButton.closest('.mobilCard').dataset.index);
        bookedDialog.showModal();
        bookedModalFill(dataIndex);
    }
}

function bookedModalFill(index) {
    let data = retrieveLocalStorage('carData');
    const {name, type, price, img, user} = data[index];
    const {fullname, email, tel, date, driver, totalDays, totalPrice} = user;
    const [pickupDate, returnDate] = date;

    const imageEl = bookedDialog.querySelector('.image img');
    imageEl.src = img;
    imageEl.setAttribute('onerror', 'imgError(this)');
    imageEl.setAttribute('onload', 'imgError(this)');

    const mainDIV = bookedDialog.querySelector('.main');
    const detailMobil = mainDIV.querySelectorAll('.detailMobil p:nth-child(even)');
    const [namaMobilP, tipeMobilP, driverP, hargaSewaP] = detailMobil;
    namaMobilP.textContent = name;
    tipeMobilP.textContent = type;
    driverP.textContent = driver ? "True" : "False" ;
    const formattedPrice = (driver ? price + 200000 : price).toLocaleString('id-ID', { style: "currency", currency: "IDR" });
    hargaSewaP.classList.toggle('driverFee', driver);
    hargaSewaP.textContent = formattedPrice;

    const detailUser = mainDIV.querySelectorAll('.detailUser p:nth-child(even)');
    const [namaSewaP, emailP, telP, pickDateP, returnDateP, totalDaysP, totalHargaP] = detailUser;
    namaSewaP.textContent = fullname;
    emailP.textContent = email;
    telP.textContent = tel;
    pickDateP.textContent = pickupDate;
    returnDateP.textContent = returnDate;
    totalDaysP.textContent = totalDays;
    totalHargaP.textContent = totalPrice.toLocaleString('id-ID', { style: "currency", currency: "IDR" });

    const returnCarButton = document.querySelector('.returnCar.BTN');
    returnCarButton.onclick = () => {
        data[index].status = "available";
        saveLocalStorage('carData', data);
        closeModal(returnCarButton);
        renderEverything();
        addHistory("Returned", data[index].name);
    };
}

// UNAVAILABLE PAGE, SET TO AVAILABLE BUTTON
function setStatusToAvailable(target) {
    let clickedButton = target.closest('button');
    if (clickedButton) {
        let dataIndex = Number(clickedButton.closest('.mobilCard').dataset.index);
        let data = retrieveLocalStorage('carData');
        data[dataIndex].status = "available";
        saveLocalStorage('carData', data);
        renderEverything();
        addHistory("Edited (Set Available)", data[dataIndex].name);
    }
}

// Close Modal
function closeModal(target) {
    let clickedButton = target.closest('button');
    if (clickedButton) {
        let dialog = clickedButton.closest('dialog.dialog');
        dialog.close();
    }
}

// [DATE] //
// ------------------------------------------------------------------------- //
const tanggalDisplay = document.querySelectorAll('.tanggalDisplay');
function displayDate() {
    let date = new Date;
    let dateFormat = date.toLocaleDateString("id-ID", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    let timeFormat = date.toLocaleTimeString([], { hour12: false });
    tanggalDisplay.forEach(display => 
        display.textContent = `${dateFormat} | ${timeFormat}`
    );
}
displayDate();
setInterval(function() {
    displayDate();
}, 1000);
