/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const response = await fetch(url);
  const users = await response.json();
  return users;
}
