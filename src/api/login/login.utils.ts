export const generateRandomToken = (): string => {
  let token = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < 32; i++) {
    token += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return token;
};
