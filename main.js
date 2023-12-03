import "./style.css";
import { initForm } from "./scripts/form.js";
import { getComedian } from "./scripts/api.js";
import { initChangeSection } from "./scripts/changeSection.js";

const init = async () => {
  const bookingComediansList = document.querySelector(
    ".booking__comedians-list"
  );
  const bookingForm = document.querySelector(".booking__form");
  const countComedians = document.querySelector(
    ".event__info-item_comedians .event__info-number"
  );
  const bookingInputFullname = document.querySelector(
    ".booking__input_fullname"
  );
  const bookingInputPhone = document.querySelector(".booking__input_phone");
  const bookingInputTicket = document.querySelector(".booking__input_ticket");

  const event = document.querySelector(".event");
  const booking = document.querySelector(".booking");
  const eventButtonReserve = document.querySelector(".event__button_reserver");
  const eventButtonEdit = document.querySelector(".event__button_edit");
  const bookingTitle = document.querySelector(".booking__title");

  const comedians = await getComedian();

  if (comedians) {
    countComedians.textContent = comedians.length;

    const changeSection = initChangeSection(
      bookingForm,
      event,
      booking,
      eventButtonReserve,
      eventButtonEdit,
      bookingTitle,
      comedians,
      bookingComediansList
    );

    initForm(
      bookingForm,
      bookingInputFullname,
      bookingInputPhone,
      bookingInputTicket,
      changeSection,
      bookingComediansList
    );
  }
};

init();
