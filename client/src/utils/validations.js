export const validate = (formData) => {
    let error = {}

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()\-_=+{};:,.<>?~`|[\]\\]{8,}$/.test(String(formData.password))) error.password = "Debe contener al menos una minúscula, una mayúscula y un número"
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(formData.email))) error.email = "Formato incorrecto"
    if (!/^[a-zA-Z\s]+$/.test(String(formData.firstName))) error.firstName = "Solo letras minúsculas o mayúsculas"
    if (!/^[a-zA-Z\s]+$/.test(String(formData.lastName))) error.lastName = "Solo letras minúsculas o mayúsculas"

    return error
}