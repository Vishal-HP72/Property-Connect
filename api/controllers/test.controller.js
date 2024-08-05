import jwt from "jsonwebtoken";
export const shouldBeLoggedIn = async (req, res) => {
  console.log(req.userId);
  return res.status(200).json({ message: " authorized!" });
};
export const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.token;
  console.log("token", token);
  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(
    token,
    "SKtauOTKHcSFaDdgYeBnd4pHRhfecZi0+8otx4ekubM=",
    async (err, payload) => {
      if (err) return res.status(403).json({ message: "Token is not Valid!" });
      if (!payload.isAdmin) {
        return res.status(403).json({ message: "Not authorized!" });
      }
    }
  );
  return res.status(200).json({ message: " authorized!" });
};
