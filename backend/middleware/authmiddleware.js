import jwt from "jsonwebtoken";
import User from "../models/User.js";

// middleware to protect route
const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.user.id).select("-password");
      next();
    } catch (error) {
      console.error("Token verification failed", error);
      res.status(401).json({ message: "Not autherised, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not autherised, no token" });
  }
};

// middleware is user admin or customer
const admin =(req,res,next)=>{
  if (req.user && req.user.role==="admin") {
    next();
  }else{
    res.status(403).json({message:"NOt Authorised , your are not admin !"})
  }
}
export { protect, admin };
