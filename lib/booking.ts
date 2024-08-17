import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Booking {
  booking_id: number;
  user_id: number;
  vehicle_id: number;
  pickup_center_id: number;
  dropoff_center_id: number;
  pickup_time: Date;
  dropoff_time: Date;
  status: string;

  constructor(
    booking_id: number,
    user_id: number,
    vehicle_id: number,
    pickup_center_id: number,
    dropoff_center_id: number,
    pickup_time: Date,
    dropoff_time: Date,
    status: string
  ) {
    this.booking_id = booking_id;
    this.user_id = user_id;
    this.vehicle_id = vehicle_id;
    this.pickup_center_id = pickup_center_id;
    this.dropoff_center_id = dropoff_center_id;
    this.pickup_time = pickup_time;
    this.dropoff_time = dropoff_time;
    this.status = status;
  }

  async createBooking() {
    const newBooking = await prisma.booking.create({
      data: {
        user_id: this.user_id,
        vehicle_id: this.vehicle_id,
        pickup_center_id: this.pickup_center_id,
        dropoff_center_id: this.dropoff_center_id,
        pickup_time: this.pickup_time,
        dropoff_time: this.dropoff_time,
        status: this.status,
      },
    });
    return newBooking;
  }

  async cancelBooking() {
    const canceledBooking = await prisma.booking.update({
      where: { booking_id: this.booking_id },
      data: { status: 'Cancelled' },
    });
    return canceledBooking;
  }

  async viewBooking() {
    const booking = await prisma.booking.findUnique({
      where: { booking_id: this.booking_id },
      include: {
        user: true,
        vehicle: true,
        pickupCenter: true,
        dropoffCenter: true,
      },
    });
    return booking;
  }
}

export default Booking;
