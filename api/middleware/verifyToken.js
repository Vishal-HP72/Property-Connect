import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  console.log(" verified token", token);

  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(
    token,
    "SKtauOTKHcSFaDdgYeBnd4pHRhfecZi0+8otx4ekubM=",
    async (err, payload) => {
      if (err) return res.status(403).json({ message: "Token is not Valid!" });
      req.userId = payload.id;

      next();
    }
  );
};
