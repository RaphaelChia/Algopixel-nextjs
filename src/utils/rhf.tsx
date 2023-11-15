
export const genRHFRegisterOptionsLength = (min?: number, max?: number):{} => {
    let retObj = {}
    if (min) {
        retObj = {
            ...retObj,
            minLength: {
                value: min,
                message: `Min length ${min}`
            }
        }
    }
    if (max) {
        retObj = {
            ...retObj,
            maxLength: {
                value: max,
                message: `Max length: ${max}`
            }
        }
    }
    return retObj
}

export const genRHFRegisterOptionsRequired = (err_msg?:string) =>{
    return {
        required:err_msg??"Required."
    }
}
