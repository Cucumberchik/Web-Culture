interface UserType {
  username: string;
  displayName: string;
  photoURL: string;
  user_id: string;
  provider: string,
  email:string
}

interface GetUserType extends UserType {
  token: string;
  date_token: string;
  _id:number,
}

interface LoginUserType extends UserType {
    date: string
}