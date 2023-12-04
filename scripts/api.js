import { Notification } from "./notification"; // у него без .js

const API_URL = "https://shimmering-amusing-eustoma.glitch.me/";

export const getComedian = async () => {
  try {
    // const response = await fetch("http://localhost:8080/comedians");
    const response = await fetch(`${API_URL}comedians`);
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

export const getClient = async (ticket) => {
  try {
    // const response = await fetch("http://localhost:8080/comedians/ticket");
    const response = await fetch(`${API_URL}clients/${ticket}`);
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

//Бонус видео 2 время 19:40
export const sendData = async (method, data, id) => {
  try {
    const response = await fetch(
      // `http://localhost:8080/clients${id ? `/${id}` : ""}`,
      `${API_URL}clients${id ? `/${id}` : ""}`,
      {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error(`Сервер вернул ошибку: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(
      `Возникла проблема с fetch запросом отправки данных: ${error.message}`
    );

    Notification.getInstance().show(
      "На сервере возникла ошибка, попробуйте позже"
    );
    return false;
  }
};

/*error: Error [ERR_HTTP_HEADERS_SENT]: Cannot write headers after they are sent to the client
node:internal/errors:497
    ErrorCaptureStackTrace(err);
    ^

Error [ERR_HTTP_HEADERS_SENT]: Cannot write headers after they are sent to the client
    at new NodeError (node:internal/errors:406:5)
    at ServerResponse.writeHead (node:_http_server:345:11)
    at sendError (file:///E:/Frontend/%D0%98%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D1%8B/my.methed.ru/StandUp_intensive2023/api_stand-up/modules/send.js:10:7)
    at handleUpdateClient (file:///E:/Frontend/%D0%98%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D1%8B/my.methed.ru/StandUp_intensive2023/api_stand-up/modules/handleUpdateClient.js:51:5) {
  code: 'ERR_HTTP_HEADERS_SENT'
}*/
