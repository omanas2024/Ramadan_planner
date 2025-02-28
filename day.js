document.addEventListener("DOMContentLoaded", function () {
    let params = new URLSearchParams(window.location.search);
    let day = params.get("day") || "؟";
    document.getElementById("dayTitle").innerText = `📅 يوم رمضان ${day}`;
});

// إضافة ذكر جديد إلى قائمة الأذكار
function addNewTasbeeh() {
    let newTasbeehInput = document.getElementById("newTasbeeh");
    let tasbeehSelect = document.getElementById("tasbeehSelect");

    let newTasbeeh = newTasbeehInput.value.trim();
    if (newTasbeeh) {
        let option = document.createElement("option");
        option.value = newTasbeeh;
        option.textContent = newTasbeeh;
        tasbeehSelect.appendChild(option);
        tasbeehSelect.value = newTasbeeh;
        newTasbeehInput.value = "";
    }
}

// وظائف العدّاد (المسبحة)
function increaseCount() {
    let count = document.getElementById("tasbeehCount");
    count.innerText = parseInt(count.innerText) + 1;
}

function decreaseCount() {
    let count = document.getElementById("tasbeehCount");
    if (parseInt(count.innerText) > 0) {
        count.innerText = parseInt(count.innerText) - 1;
    }
}

function resetCount() {
    document.getElementById("tasbeehCount").innerText = "0";
}

// الرجوع إلى الصفحة الرئيسية
function goBack() {
    window.location.href = "index.html";
}
