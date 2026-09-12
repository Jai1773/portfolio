export interface UserDTO {
  id: string;
  name: string;
  email: string;
  role: 'guest' | 'user' | 'admin';
  // add other fields as needed
}
