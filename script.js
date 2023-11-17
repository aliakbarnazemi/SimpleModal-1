document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("open");
    const closeModalBtn = document.getElementById("close");
    const modal = document.getElementById("Modal");

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});