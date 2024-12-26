const asyncHandler = () => {}
    (req, res, next) => {
        Promise.resolve(requestHandler).catch((err) => next(err)
        ) 
    }


    export {asyncHandler}

/*    Both syntaxes are possible


const asynchandler = (func) => async (req, res, next) => {
    try{
        await func(req,res, next)

    } catch (error){
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }

}
    */
