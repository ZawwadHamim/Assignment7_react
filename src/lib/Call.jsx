export default async function getFriends() {
  const res = await fetch('/friends.json');
  const friends = await res.json();
  return friends;
}