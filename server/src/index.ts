import express, { Request, Response } from "express";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import cors from "cors"

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.post("/postBannerData", async (req: Request, res: Response) => {
  const { title, description, dateAndTime, url } = req.body;
  try {
    const parsedDate = new Date(dateAndTime);
    const isoDateString = parsedDate.toISOString();
    await prisma.banner.create({
      data: {
        title,
        description,
        dateAndTime: isoDateString,
        url,
      },
    });
    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err)
  }
});

app.get("/getBannerData", async (req: Request, res: Response) =>{
  try {
    const data = await prisma.banner.findMany({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err)
  }
})

app.listen(process.env.PORT, () => {
  console.log(`listining on port ${process.env.PORT}`);
});
