import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Vehicle {
  vehicle_id: number;
  model_id: number;
  center_id: number;
  status: string;

  constructor(vehicle_id: number, model_id: number, center_id: number, status: string) {
    this.vehicle_id = vehicle_id;
    this.model_id = model_id;
    this.center_id = center_id;
    this.status = status;
  }

  async addVehicle() {
    const newVehicle = await prisma.vehicle.create({
      data: {
        model_id: this.model_id,
        center_id: this.center_id,
        status: this.status,
      },
    });
    return newVehicle;
  }

  async updateStatus(newStatus: string) {
    const updatedVehicle = await prisma.vehicle.update({
      where: { vehicle_id: this.vehicle_id },
      data: { status: newStatus },
    });
    return updatedVehicle;
  }

  async viewDetails() {
    const vehicle = await prisma.vehicle.findUnique({
      where: { vehicle_id: this.vehicle_id },
      include: {
        model: true,
        center: true,
      },
    });
    return vehicle;
  }
}

export default Vehicle;
