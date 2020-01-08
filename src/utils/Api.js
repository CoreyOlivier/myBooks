export async function getBookByTitle(title) {
  const url = "https://www.googleapis.com/books/v1/volumes?q=" + title;
  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson.items[0];
  } catch (err) {
    console.error(err);
  }
}
