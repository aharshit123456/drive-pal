import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Center {
  center_id: number;
  center_name: string;
  center_location: string;
  state: string;

  constructor(center_id: number, center_name: string, center_location: string, state: string) {
    this.center_id = center_id;
    this.center_name = center_name;
    this.center_location = center_location;
    this.state = state;
  }

  async addCenter() {
    const newCenter = await prisma.center.create({
      data: {
        center_name: this.center_name,
        center_location: this.center_location,
        state: this.state,
      },
    });
    return newCenter;
  }

  async updateCenter(updates: Partial<Center>) {
    const updatedCenter = await prisma.center.update({
      where: { center_id: this.center_id },
      data: updates,
    });
    return updatedCenter;
  }

  async viewCenter() {
      const center = await prisma.center.findUnique({
        where: { center_id: this.center_id },
        include: {
          Vehicles: true,
        },
      });
      return center;
    }
}

export default Center;
