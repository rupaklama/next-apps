// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// All modules inside of 'api' dir is known as Serverless Function
// We can send Server Responses here without setting up Backend Server in our App

// note - Next. js uses some Node. js features
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
