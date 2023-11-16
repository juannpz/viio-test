export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validatePassword = (password) => {
    // Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número. Puede contener signos.
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()\-_=+{};:,.<>?~`|[\]\\]{8,}$/;
    return re.test(String(password));
}

export const notEmpty = (data) => {
    if (data.length > 0) return true
    return false
}

export const notEmptyStrings = (data) => {
    return data.trim() !== "";
}

// if (!validateEmail(formData.email)) {
        //     toast.error("Por favor, introduce un correo electrónico válido.", {
        //         position: toast.POSITION.TOP_RIGHT
        //     });
        //     console.log("mal");
        //     return;
        // }
        // if (!validatePassword(formData.password)) {
        //     console.log("mal");
        //     return;
        // }
        // if (!notEmpty(formData.email)) {
        //     return;
        // }
        // if (!notEmptyStrings(formData.email)) {
        //     return;
        // }
        // if (!notEmpty(formData.password)) {
        //     return;
        // }
        // if (!notEmptyStrings(formData.password)) {
        //     return;
        // }