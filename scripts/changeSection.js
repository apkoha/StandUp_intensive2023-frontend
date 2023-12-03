import { createComedianBlock } from "./comedians.js";

export const initChangeSection = (
  bookingForm,
  event,
  booking,
  eventButtonReserve,
  eventButtonEdit,
  bookingTitle,
  comedians,
  bookingComediansList
) => {
  eventButtonEdit.style.transition = "opacity 0.5s, visibility 0.5s";
  eventButtonReserve.style.transition = "opacity 0.5s, visibility 0.5s";

  eventButtonReserve.classList.remove("event__button_hidden");
  eventButtonEdit.classList.remove("event__button_hidden");

  //Бонус видео 2 время 12:30. Правки на 38:23
  const changeSection = () => {
    event.classList.toggle("event__hidden");
    booking.classList.toggle("booking__hidden");

    if (!booking.classList.contains("booking__hidden")) {
      const comedianBlock = createComedianBlock(
        comedians,
        bookingComediansList
      );
      bookingComediansList.append(comedianBlock);
    }
  };

  eventButtonEdit.addEventListener("click", () => {
    changeSection();
    bookingTitle.textContent = "Забронируйте место в зале";
    bookingForm.method = "POST";
  });
  eventButtonReserve.addEventListener("click", () => {
    changeSection();
    bookingTitle.textContent = "Редактирование брони";
    bookingForm.method = "PATCH";
    console.log("bookingForm: ", bookingForm);
    console.log("bookingForm.method: ", bookingForm.method);
  });

  return changeSection;
};
