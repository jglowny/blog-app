const API_KEY3 = "bdfb4b2a5b7e446ca7469a3ec37a50f5";
// const API_KEY4 = "da4d0c7a05c242bfbd327d5558de439a";
const BASE_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY3}&language=pl&sortBy=publishedAt`;

// const PAGE_SIZE = 4;
const CATEGORIES = ["wiedza", "inspiracje", "interpretacje", "dostępne"];

export const getPostById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}&q=${id}`);
    if (!response.ok) throw new Error(`Błąd API: ${response.status}`);
    const data = await response.json();
    return data.articles.length > 0 ? data.articles[0] : null;
  } catch (error) {
    console.error(`Błąd pobierania posta #${id}:`, error);
    return null;
  }
};

export const getPostByCategory = async (category: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}&q=${
        category === "dostepne" ? "dostępne" : category
      }&pageSize=4&sortBy=publishedAt`
    );
    if (!response.ok) throw new Error(`Błąd API: ${response.status}`);
    const data = await response.json();

    return data.articles.length > 0 ? data.articles : null;
  } catch (error) {
    console.error(`Błąd pobierania posta dla kategorii ${category}:`, error);
    return null;
  }
};

const fetchNewsByCategory = async (category: string) => {
  const url = `${BASE_URL}&pageSize=4&q=${category}&sortBy=publishedAt&pageSize=1`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.articles && data.articles.length > 0) {
      const extendData = { ...data.articles[0], category };
      return extendData;
    } else {
      console.log(`Brak artykułów dla kategorii: ${category}`);
      return null;
    }
  } catch (error) {
    console.error(
      `Błąd podczas pobierania danych dla kategorii ${category}:`,
      error
    );
    return null;
  }
};

export const fetchAllCategoriesParallel = async () => {
  const promises = CATEGORIES.map((category) => fetchNewsByCategory(category));
  const results = await Promise.all(promises);
  return results.map((article, index) => ({
    category: CATEGORIES[index],
    article,
  }));
};

export const fetchAllFavoritesArticleParallel = async (articles: string[]) => {
  const promises = articles.map((category) => fetchNewsByCategory(category));
  const results = await Promise.all(promises);
  return results.map((article) => ({
    article,
  }));
};
