const notFound = (req,res,next) =>{
    const error = new Error(`No Endpoint Found`)
    error.status = 400
    next(error)
}

export default notFound