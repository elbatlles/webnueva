export function getStrapiURL(path = ``) {
  return `${`https://backendtienda.herokuapp.com/`}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string | undefined) {
  const requestUrl = getStrapiURL(path);

  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
const dev = process.env.NODE_ENV !== `production`;
// const dev = true;
export const server = dev
  ? `http://localhost:1337`
  : `https://backendtienda.herokuapp.com`;
