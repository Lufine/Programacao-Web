/*
Curso de Engenharia de Software - UniEVANGÉLICA
Disciplina de Programação Web
Dev: Luiz Filipe Neuwirth
DATA: 24/03/2023
*/

document.addEventListener("DOMContentLoaded", () => {
    const addMedicineForm = document.getElementById("add-medicine-form");
    const medicineNameInput = document.getElementById("medicine-name");
    const medicineList = document.getElementById("medicine-list");

    addMedicineForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const medicineName = medicineNameInput.value.trim();
        if (medicineName) {
            addMedicine(medicineName);
            medicineNameInput.value = "";
        }
    });

    function addMedicine(name) {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        listItem.className = "medicine-item";
        listItem.addEventListener("click", () => {
            listItem.remove();
        });
        medicineList.appendChild(listItem);
    }
});