//Bonus видео 3 время 45:30
import QRCode from "qrcode";
import { displayClientInfo } from "./display";

const displayQRCode = (data) => {
  let error = false;
  const modal = document.querySelector(".modal");
  const canvas = document.getElementById("qrCanvas");
  const closeButton = document.querySelector(".modal__close");

  QRCode.toCanvas(canvas, data, (err) => {
    if (error) {
      error = true;
      console.error(error);
      return;
    }
    console.log("QRcode создан");
  });

  if (error) {
    Notification.getInstance().show("Что-то пошло не так, попробуйте позже.");
    return;
  }

  modal.classList("modal_show");

  window.addEventListener("click", ({ target }) => {
    if (target === closeButton || target === modal) {
      modal.classList.remove("modal_show");
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    }
  });
};

export const showQrController = (bookingPerformance) => {
  bookingPerformance.addEventListener("client", ({ target }) => {
    if (target.closest(".booking__hall")) {
      const bookingData = target.dataset.booking;
      displayQRCode(bookingData);
    }
  });
};
