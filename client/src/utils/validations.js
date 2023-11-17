export const validate = (formData) => {
    let errors = {};

    for (const key in formData) {
        if (key.length > 1) {
            const value = formData[key].trim();

            if (value.length > 0) {
                if (!errors[key]) errors[key] = undefined;
                if (key === "password" && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()\-_=+{};:,.<>?~`|[\]\\]{8,}$/.test(value)) {
                    errors[key] = "Debe contener al menos una minúscula, una mayúscula y un número";
                } else if (key === "email" && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
                    errors[key] = "Formato incorrecto";
                } else if ((key === "firstName" || key === "lastName") && !/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) {
                    errors[key] = "No se permiten caracteres especiales";
                }
            }
        }
    }

    return errors;
};