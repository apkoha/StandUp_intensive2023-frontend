//Bonus время 25:46

export const displayClientInfo = (parent, data) => {
  parent.innerHTML += `
  <p class="booking__client-item">Имя: ${data.fullname}</p>;
  <p class="booking__client-item">Телефон: ${data.phone}</p>
  <p class="booking__client-item">Номер билета: ${data.ticketNumber}</p>
  `;
};

export const displayBooking = (parent, clientData, comediansData) => {
  const bookingList = document.createElement("ul");
  bookingList.classList.add("booking__list");

  const bookingComedians = clientData.booking.map((bookingComedian) => {
    const comedian = comediansData.find(
      (item) => item.id === bookingComedian.comedian
    );

    const perfomance = comedian.performances.find(
      (item) => bookingComedian.time === item.time
    );

    return {
      comedian,
      performance,
    };
  });

  bookingComedians.sort((a, b) =>
    a.perfomance.time.localCompare(b.perfomance.time)
  );

  const comedianElements = bookingComedians.map(({ comedian, perfomance }) => {
    const comedianElement = document.createElement("li");
    comedianElement.classList.add("booking__item");
    comedianElement.innerHTML = `
    <h3>${comedian.comedian}</h3>
    <p>Время: ${perfomance.time}</p>
    <button class="booking__hall" type="button" data-booking="${
      clientData.fullname
    } ${clientData.ticketnumber} ${comedian.comedian} ${perfomance.time} ${
      perfomance.hall
    }">
      ${[perfomance.hall]}
    </button>
    `;
    return comedianElement;
  });

  bookingList.append(...comedianElements);
  parent.append(bookingList);
};
