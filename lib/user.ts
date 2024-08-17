import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class User {
  user_id: number;
  email: string;
  username: string;
  password_hash: string;
  date_of_birth: Date;
  kyc_aadhar?: string;
  kyc_pan?: string;
  home_location: string;

  constructor(user_id: number, email: string, username: string, password_hash: string, date_of_birth: Date, home_location: string, kyc_aadhar: string = '', kyc_pan: string = '') {
    this.user_id = user_id;
    this.email = email;
    this.username = username;
    this.password_hash = password_hash;
    this.date_of_birth = date_of_birth;
    this.kyc_aadhar = kyc_aadhar;
    this.kyc_pan = kyc_pan;
    this.home_location = home_location;
  }

  async register() {
    if (!this.kyc_aadhar && !this.kyc_pan) {
      throw new Error('Either KYC Aadhar or PAN must be provided.');
    }
    if (this.kyc_aadhar && this.kyc_pan) {
      throw new Error('Both KYC Aadhar and PAN cannot be provided.');
    }

    const newUser = await prisma.user.create({
      data: {
        email: this.email,
        username: this.username,
        password_hash: this.password_hash,
        date_of_birth: this.date_of_birth,
        kyc_aadhar: this.kyc_aadhar || '',
        kyc_pan: this.kyc_pan || '',
        home_location: this.home_location,
      },
    });
    return newUser;
  }

  async login() {
    const user = await prisma.user.findUnique({
      where: {
        email: this.email,
      },
    });

    if (user && user.password_hash === this.password_hash) {
      return user;
    } else {
      throw new Error('Invalid email or password.');
    }
  }

  async manageProfile(updates: Partial<User>) {
    const updatedUser = await prisma.user.update({
      where: { user_id: this.user_id },
      data: updates,
    });
    return updatedUser;
  }
}

export default User;
