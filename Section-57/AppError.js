class AppError extends Error{
    constructor(message,status){
        super();
        this.status = status;
        this.message = message;
    }
}


module.exports = AppError