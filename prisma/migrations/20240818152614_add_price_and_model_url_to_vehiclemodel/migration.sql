-- AlterTable
ALTER TABLE "VehicleModel" ADD COLUMN     "model_url" TEXT,
ADD COLUMN     "price" DECIMAL(65,30),
ALTER COLUMN "updated_at" DROP DEFAULT;
