export const getComedian = async () => {
  try {
    const response = await fetch("http://localhost:8080/comedians");
    if (!response.ok) {
      throw new Error(`Сервер вернул ошибку: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Возникла проблема с fetch запросом: ${error.message}`);

    Notification.getInstance().show(
      "На сервере возникла ошибка, попробуйте позже"
    );
  }
};
