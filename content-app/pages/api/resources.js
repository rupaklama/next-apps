import data from "./data.json";

export default function resources(req, res) {
  res.send(data);
}
