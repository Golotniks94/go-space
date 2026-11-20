const leadButton = document.querySelector("#lead-button");
const leadDialog = document.querySelector("#lead-dialog");

if (leadButton && leadDialog) {
  leadButton.addEventListener("click", () => {
    leadDialog.showModal();
  });
}
