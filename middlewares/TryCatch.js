// ye middleware hai , isse hume har baar try catch itna nahi likhna padega.
// yha se function return ho raha hai poora asyc await lagne ke baad bas vha logic likhna hai naki ye async await likhna hai

const TryCatch = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next); // ye poora logic hai jo vha se pass kiya gaya hai. see video part 4. if not understand.
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
};

export default TryCatch;
