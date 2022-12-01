const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({msg: err}) // send the error message back
}

export default errorHandlerMiddleware