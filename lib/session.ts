import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

class Session {
  session_id: string;
  user_id: number;
  created_at: Date;
  expires_at: Date;

  constructor(user_id: number, expires_at: Date) {
    this.session_id = uuidv4();
    this.user_id = user_id;
    this.created_at = new Date();
    this.expires_at = expires_at;
  }

  async createSession() {
    const newSession = await prisma.session.create({
      data: {
        session_id: this.session_id,
        user_id: this.user_id,
        created_at: this.created_at,
        expires_at: this.expires_at,
      },
    });
    return newSession;
  }

  async validateSession() {
    const session = await prisma.session.findUnique({
      where: { session_id: this.session_id },
    });

    if (session && session.expires_at > new Date()) {
      return true;
    } else {
      throw new Error('Session expired or invalid.');
    }
  }
}

export default Session;
