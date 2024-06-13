export const loginUser = async (username: string, password: string) => {
  const response = await fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error('Failed to login');
  }
  const data = await response.json();
  const token = data.token;

  //  fetch user data based on token
  const userResponse = await fetch('https://fakestoreapi.com/users/1', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!userResponse.ok) {
    throw new Error('Failed to fetch user data');
  }
  const userData = await userResponse.json();
  return { token, id: userData.id, username: userData.username };
};
