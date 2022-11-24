/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const url = `https://jsonplaceholder.typicode.com/users/${params.slug}`;
  const response = await fetch(url);
  const user = await response.json();
  //   console.log(user);
  return {
    body: {
      user: user,
    },
  };
}
